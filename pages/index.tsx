import RotatingImageCard from '@/components/rotating-image-card'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Soutar</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <RotatingImageCard
        verb='made'
        items={[{ label: 'Mastermine', imageUrl: './mastermine.jpg' }]}
        css={{
          width: '11.6em',
          height: '5.4em'
        }}
      />
    </>
  )
}
