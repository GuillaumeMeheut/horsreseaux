import { formatName } from 'utils/formatName'

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request

  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const path = formatName(req.body.entry.navigation)
    const model = req.body.model

    console.log('req name: ' + path)
    console.log('req model: ' + model)
    if (!path && model === 'accueil') {
      await res.revalidate('/')
    }

    if (model) {
      switch (model) {
        case 'page':
          await res.revalidate(`/${path}`)
          break
        default:
          break
      }
    }

    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err)

    return res.status(500).send('Error revalidating')
  }
}
