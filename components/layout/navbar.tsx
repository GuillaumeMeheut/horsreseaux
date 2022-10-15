import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import css from './navbar.module.scss'

export default function Navbar() {
  const router = useRouter()

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Les bonnes affaires', href: '/les-bonnes-affaires' },
  ]

  return (
    <nav className={css.nav}>
      {links.map((link) => (
        <React.Fragment key={link.href}>
          <Link href={link.href} passHref>
            <a className={router.pathname === link.href ? css.active : ''}>
              {link.name}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  )
}
