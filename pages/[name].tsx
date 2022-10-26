import Content from 'components/content'
import Layout from 'components/layout'
import type { NextPage } from 'next'
import { getPage, getPages } from 'utils/fetchData'
import { formatName, revertFormatName } from 'utils/formatName'
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
  const { name } = params

  const res = await getPage(name)

  const content = res.data.content

  return {
    props: {
      content,
      nav: await getNav(),
    },
  }
}

export async function getStaticPaths() {
  const res = await getPages()

  const paths = res.data.map((event) => ({
    params: { name: formatName(event.name) },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}
