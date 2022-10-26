import clientPromise from '../../lib/mongodb'

export default async function handler(req, res) {
  const { name } = req.query

  const client = await clientPromise
  const db = client.db('db')
  switch (req.method) {
    case 'POST':
      let bodyObject = JSON.parse(req.body)
      let myPage = await db.collection('pages').insertOne(bodyObject)
      res.status(200).json(myPage.ops[0])
      break
    case 'GET':
      const page = await db.collection('pages').findOne({ name })

      res.status(200).json({ data: page })
      break
  }
}
