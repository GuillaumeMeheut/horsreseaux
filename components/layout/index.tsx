import Header from './header'
import Navbar from './navbar'
import css from './index.module.scss'

export default function Layout({ children, nav }) {
  return (
    <>
      <Header />
      <div className={css.wrap}>
        <Navbar nav={nav} />
        <main>{children}</main>
      </div>
    </>
  )
}
