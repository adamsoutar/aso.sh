import ElevatedCard from '@/components/elevated-card'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Soutar</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <ElevatedCard>Hello, world!</ElevatedCard>
    </>
  )
}
