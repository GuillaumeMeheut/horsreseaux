import { getPages } from './fetchData'

export async function getNav() {
  const pages = await getPages()

  return pages.data.map((data) => data.name)
}
