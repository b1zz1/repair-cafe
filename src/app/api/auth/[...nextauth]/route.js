import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID;
const KEYCLOAK_CLIENT_SECRET = process.env.KEYCLOAK_CLIENT_SECRET;
const KEYCLOAK_URL = process.env.KEYCLOAK_URL;
const KEYCLOAK_REALM = process.env.KEYCLOAK_REALM;

const KEYCLOAK_ISSUER = `${KEYCLOAK_URL}/realms/${KEYCLOAK_REALM}`;

const keycloakConfig = {
    clientId: KEYCLOAK_CLIENT_ID,
    clientSecret: KEYCLOAK_CLIENT_SECRET,
    issuer: KEYCLOAK_ISSUER,
} 

const providers = [
    KeycloakProvider(keycloakConfig),
];

const authOptions = {
    providers,
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.accessTokenExpires = Date.now() + account.expires_in * 1000;
            }

            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            return refreshAccessToken(token);
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.error = token.error;
            return session;
        }
    }
};

async function refreshAccessToken(token) {
    try {
        const url = `${keycloakConfig.issuer}/protocol/openid-connect/token`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: keycloakConfig.clientId,
                client_secret: keycloakConfig.clientSecret,
                grant_type: 'refresh_token',
                refresh_token: token.refreshToken
            })
        });

        const refreshedTokens = await response.json();

        if (!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken
        };
    } catch (error) {
        if (error.error == 'invalid_grant') {
            throw error;
        }
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        };
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };