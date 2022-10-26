export default async function accesAdmin(req, res) {
  try {
    if (req.body !== process.env.PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: 'Mot de passe incorrect' })
    } else {
      return res.status(200).json({ success: true, message: 'Connecté' })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error login failed' })
  }
}
