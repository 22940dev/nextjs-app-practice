import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Project</title>
      </Head>

      <main>
        <Header />
        <Navigation />
      </main>
    </>
  )
}
