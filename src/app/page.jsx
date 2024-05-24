import Header from '@components/layout/Header'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex w-full min-h-screen justify-center items-center bg-purple.1">
        <h1 className="text-4xl font-bold">Repair Café</h1>
      </main>
    </>
  )
}

export default Home