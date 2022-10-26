import { v2 as cloudinary } from 'cloudinary'

export default async function uploadImage(req, res) {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  }

  const imagePath = req.body

  try {
    const result = await cloudinary.uploader.upload(imagePath, options)

    return res.json({ path: result.secure_url })
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error uploading image')
  }
}
