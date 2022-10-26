export async function getNav() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/pages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const resJson = await res.json()

  return resJson.data.map((data) => data.name)
}
