import css from './header.module.scss'
import Image from 'next/image'
import Soleil from 'public/assets/soleil_couchant.jpg'

export default function Header() {
  return (
    <header className={css.header}>
      <Image src={Soleil} className={css.img} objectFit="cover" />
      <div className={css.textContainer}>
        <h1>horsreseau.info</h1>
        <div>
          <p>
            J'ai créer ce site pour aidez d'autres personnes à avoir une maison
            autonomme en énergie tout en gardant le confort d'une maison moderne
          </p>
          <p>
            Je vous donnerais des informations et des conseils pour faire des
            économies d'énergie tout en respectant l'environnement.
          </p>
        </div>
        <p className={css.owner}>Site de Laurent Meheut</p>
      </div>
    </header>
  )
}
