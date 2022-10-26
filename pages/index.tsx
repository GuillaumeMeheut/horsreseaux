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

export const getStaticProps = async ({}) => {
  // let res = await fetch('http://localhost:3000/api/pages', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })

  // let resJson = await res.json()

  return {
    props: {
      content: 'nfios',
      nav: await getNav(),
    },
  }
}
