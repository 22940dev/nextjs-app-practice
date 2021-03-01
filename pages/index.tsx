import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Project</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}
