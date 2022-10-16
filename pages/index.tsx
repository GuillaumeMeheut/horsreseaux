import Content from 'components/content'
import Layout from 'components/layout'
import type { NextPage } from 'next'
import { getNav } from 'utils/getNav'

const Home: NextPage = ({ content, nav }: any) => {
  return (
    <Layout nav={nav}>
      <Content content={content} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async ({ params }) => {
  const HEADERS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/accueils`,
    HEADERS,
  )

  const resJson = await res.json()

  const content = resJson.data[0].attributes.contenue

  return {
    props: {
      content,
      nav: await getNav(),
    },
  }
}
