import clientPromise from 'lib/mongodb'

export async function getPages() {
  const client = await clientPromise
  const db = client.db('db')
  try {
    const allPages = await db.collection('pages').find({}).toArray()

    return { data: allPages }
  } catch (err) {
    console.log(err)
    return { message: 'error' }
  }
}

export async function getPage(name: string): Promise<{ data: any }> {
  const client = await clientPromise
  const db = client.db('db')

  const page = await db.collection('pages').findOne({ name })

  return { data: page }
}
