import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'

type PageProps = {
  children?: ReactNode
}

const Page = ({ children }: PageProps) => (
  <>
    <Head>
      <title>NextJs Project</title>
    </Head>

    <main>
      <Header />
      <Navigation />
      {children}
    </main>
  </>
)

export default Page
