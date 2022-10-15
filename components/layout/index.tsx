import Header from './header'
import Navbar from './navbar'
import css from './index.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={css.wrap}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
