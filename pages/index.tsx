import Head from 'next/head'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types'

const PastProject: React.FC<{
  name: string
  description: string
  url?: string
}> = ({ name, description, url }) => {
  return (
    <li>
      <a href={url ?? `https://github.com/adamsoutar/${name}`}>
        <b>{name}</b>
      </a>{' '}
      - {description}
    </li>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Soutar</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <h1>Hello, I&apos;m Adam Soutar.</h1>
      <p>
        I&apos;m a Software Engineer. I write TypeScript, Rust, C# and Java.
        Believe it or not, I also used to be a professional web developer.
      </p>
      <p>
        This extremely advanced world wide web site, which puts all of my HTML
        prowess on display, is a placeholder which mainly saves this domain for
        my email address.
      </p>

      <h2 style={{ marginTop: '1rem' }}>
        You may be interested in some of my past output.
      </h2>

      <ul>
        <PastProject
          name='mastermine'
          description="3D, Rubik's cube-like minesweeper game"
          url='https://mastermine.app/'
        />
        <PastProject name='gbrs' description='Nintendo Gameboy emulator' />
        <PastProject
          name='velocity'
          description='Cross-platform *NIX terminal emulator'
        />
        <PastProject
          name='ass'
          description='From-scractch C to x86_64 asm compiler'
        />
        <PastProject
          name='esolangs'
          description='Implementations of obscure programming languages'
        />
      </ul>

      <h2 style={{ marginTop: '1rem' }}>Or you may want to reach me.</h2>

      <p>You can email any alias at this domain and I&apos;ll see it.</p>
      <p>
        I&apos;m also on GitHub and LinkedIn as my first and last name
        concatenated.
      </p>
      <p>
        Want to follow me somewhere a little more personal, like Instagram or
        Twitter? Don&apos;t.
      </p>
    </>
  )
}

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<{}>> {
  return {
    props: {}
  }
}
