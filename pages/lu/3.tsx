import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types'
import { RedirectPage, RedirectPageProps } from './1'

const Page3: React.FC<RedirectPageProps> = ({ url }) => {
  return <RedirectPage url={url} />
}
export default Page3

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<RedirectPageProps>> {
  return {
    props: {
      url: process.env.LU_REDIRECT_3!
    }
  }
}
