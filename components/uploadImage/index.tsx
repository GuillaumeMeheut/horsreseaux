import css from './header.module.scss'
import Image from 'next/image'
import Soleil from 'public/assets/soleil_couchant.jpg'
import { useState } from 'react'

export default function UploadImage() {
  const [file, setFile] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  function onChangeImage(e) {
    if (e.target.files[0]) {
      var reader = new FileReader()
      reader.onload = function () {
        setFile(reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
    setFile(undefined)
  }

  async function uploadImage(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage('Envoie en cours')
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload_image`, {
      method: 'POST',
      body: file,
    })
    setIsLoading(false)
    const resJson = await res.json()
    setMessage(resJson.message)
  }

  return (
    <div>
      <form onSubmit={uploadImage}>
        <label htmlFor="file">Ajoutez une nouvelle image</label>
        <input name="file" type="file" onChange={onChangeImage} />
        <button disabled={isLoading || !file}>Envoyez</button>
      </form>
      {file && <img src={file} alt="" />}
      <p>{message}</p>
    </div>
  )
}
