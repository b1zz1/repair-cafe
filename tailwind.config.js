/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      'purple.1': '#F5F5FB',
      'purple.2': '#DBDBEB',
      'purple.3': '#E3E6FF',
      'purple.4': '#939AFE',
      'purple.5': '#5D6BFF',
      'purple.6': '#5060FF',
      'purple.7': '#3C4DFF',

      'white.1': '#FFFFFF',
      'white.2': '#F5F5F5',
      'white.3': '#A9ABC2',
      'white.4': '#4B4C57',
      'white.5': '#2E2F34',

      'error.1': '#FF7B7B',
      'error.2': '#FF3838',
      'error.3': '#F42D2D',

      'teste.1': '#5C6089',
      'teste.2': '#5058AE',

      'sucess': '#93D724',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding: {
        "sm": "0.5rem",
        "md": "1rem",
        "lg": "1.5rem",
      },
      gap: {
        "md": "1.5rem",
      },
      boxShadow: {
        "header": "0px 0px 32px 0px rgba(28,43,204, 0.12)",
        "md": "0px 4px 16px 0px rgba(92, 96, 137, 0.16)",
        "lg": "8px 8px 32px 0px rgba(80, 96, 255, 0.16) , -8px -8px 32px 0px rgba(255, 255, 255, 1)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "transparent",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5060FF",
          foreground: "#5060FF",
        },
        secondary: {
          DEFAULT: "#E3E6FF",
          foreground: "#E3E6FF",
        },
        destructive: {
          DEFAULT: "#FF3838",
          foreground: "#FF3838",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.truncate-5-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '5',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.hide-date': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          'appearance': 'none',
          '&::-webkit-inner-spin-button': {
            'display': 'none',
          },
          '&::-webkit-calendar-picker-indicator': {
            'display': 'none',
          },
          '&::-ms-clear': {
            'display': 'none',
          },
        },
      });
    },
  ],
}