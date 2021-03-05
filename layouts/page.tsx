import Head from 'next/head'
import { ReactNode } from 'react'
import { metadata as sitemeta } from 'config'
import Header from '@components/header'
import Navigation from '@components/navigation'

type MetaProps = {
  title: string
  description: string
}

type PageProps = {
  meta: MetaProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="twitter:site" content={sitemeta.author.twitter} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
    </Head>

    <main>
      <Header />
      <Navigation />
      {children}
    </main>
  </>
)

export default Page
