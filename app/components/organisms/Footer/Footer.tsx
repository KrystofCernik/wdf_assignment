import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/atoms/Logo/Logo'
import logo from '/public/images/logo.svg'
import InstagramIcon from '@/icons/instagram.svg'
import FacebookIcon from '@/icons/facebook.svg'
import YoutubeIcon from '@/icons/youtube.svg'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer__wrapper'>
      <div className="footer">
        <div className="footer__content">
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__navigation'>
            <div className="footer__navigation__links">
              <ul>
                <p className='small'>Léčba neplodnosti</p>
                <Link href={''}>IUI (Inseminace)</Link>
                <Link href={''}>IVF s vlastními vajíčky</Link>
                <Link href={''}>IVF s darovanými vajíčky</Link>
                <Link href={''}>IVF s darovanými embryi</Link>
              </ul>
              <ul>
                <p className='small'>Užitečné informace</p>
                <Link href={''}>IUI (Inseminace)</Link>
                <Link href={''}>Kontrola a bezpečnost</Link>
                <Link href={''}>Spolupracující instituce</Link>
                <Link href={''}>Informace pro média</Link>
                <Link href={''}>Kariéra</Link>
              </ul>
              <ul>
                <p className='small'>Kliniky</p>
                <Link href={''}>REPROFIT Brno</Link>
                <Link href={''}>REPROFIT Ostrava</Link>
                <Link href={''}>REPROFIT Bratislava</Link>
                <Link href={''}>REPROFIT Martin</Link>
              </ul>
            </div>
            <div className="footer__navigation__partners">
              <p className='small'>Člen skupiny</p>
              <Image
                src={logo.src}
                alt='partner logo'
                width={136}
                height={33}
              />
              <div className="footer__navigation__socials">
                <Image
                  src={InstagramIcon.src}
                  alt='instagram icon'
                  width={32}
                  height={32}
                />
                <Image
                  src={FacebookIcon.src}
                  alt='facebook icon'
                  width={32}
                  height={32}
                />
                <Image
                  src={YoutubeIcon.src}
                  alt='youtube icon'
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className='tiny'>&#169; Reprofit 2023. Všechna práva vyhrazena.</p>
          <p className='tiny'>Vytvořeno ve WDF</p>
        </div>
      </div>
    </div>
  )
}
