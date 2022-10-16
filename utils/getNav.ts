export async function getNav() {
  const resNav = await fetch(`${process.env.NEXT_PUBLIC_API}/api/pages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const resNavJson = await resNav.json()

  return resNavJson.data.map((data) => data.attributes.navigation)
}
