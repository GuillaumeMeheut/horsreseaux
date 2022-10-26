import Login from 'components/login'
import UploadImage from 'components/uploadImage'
import type { NextPage } from 'next'
import { useState } from 'react'

const AdminPannel: NextPage = () => {
  const [isLogged, setIsLogged] = useState(true)

  return (
    <div>
      {!isLogged ? (
        <Login setIsLogged={setIsLogged} />
      ) : (
        <div>
          <h1>Admin Pannel</h1>
          <UploadImage />
        </div>
      )}
    </div>
  )
}

export default AdminPannel
