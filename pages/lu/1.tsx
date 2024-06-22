import Head from 'next/head'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types'
import { useEffect } from 'react'

export interface RedirectPageProps {
  url: string
}
export const RedirectPage: React.FC<RedirectPageProps> = ({ url }) => {
  return (
    <>
      <Head>
        <title>Sound, Sense and the Space</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='refresh' content={`0;url=${url}`} />
      </Head>
      <h2 style={{ fontFamily: 'sans-serif' }}>
        If you{"'"}re not redirected automatically, click <a href={url}>here</a>
      </h2>
    </>
  )
}

const Page1: React.FC<RedirectPageProps> = ({ url }) => {
  return <RedirectPage url={url} />
}
export default Page1

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<RedirectPageProps>> {
  return {
    props: {
      url: process.env.LU_REDIRECT_1!
    }
  }
}
