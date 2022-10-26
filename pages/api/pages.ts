import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('db')
  try {
    const allPages = await db.collection('pages').find({}).toArray()

    return res.json({ status: 200, data: allPages })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'error' })
  }
}
