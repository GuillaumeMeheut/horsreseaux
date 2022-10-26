import { useState } from 'react'

export default function Login({ setIsLogged }) {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function validSecretCode(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage('Envoie en cours')
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/access_admin`, {
      method: 'POST',
      body: password,
    })
    setIsLoading(false)
    const resJson = await res.json()
    setMessage(resJson.message)
    setIsLogged(resJson.success)
  }

  return (
    <div>
      <form onSubmit={validSecretCode}>
        <label htmlFor="password">Mot de passe:</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>Envoyez</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
