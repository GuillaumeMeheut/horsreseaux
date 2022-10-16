import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { formatName } from 'utils/formatName'
import css from './navbar.module.scss'

export default function Navbar({ nav }) {
  const router = useRouter()

  return (
    <nav className={css.nav}>
      <Link href={'/'} passHref>
        <a className={router.pathname === '/' ? css.active : ''}>Accueil</a>
      </Link>
      {nav.map((link) => {
        const href = '/' + formatName(link)
        return (
          <React.Fragment key={link}>
            <Link href={href} passHref>
              <a className={router.asPath === href ? css.active : ''}>{link}</a>
            </Link>
          </React.Fragment>
        )
      })}
    </nav>
  )
}
