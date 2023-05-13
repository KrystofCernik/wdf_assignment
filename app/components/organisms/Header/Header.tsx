'use client'
import { gsap } from 'gsap'
import Logo from "@/atoms/Logo/Logo"
import Link from "next/link"
import Image from "next/image"
import SearchIcon from '@/icons/search.svg'
import UserIcon from '@/icons/user.svg'
import Button from '@/atoms/Button/Button'
import { useLayoutEffect } from "react"

import './Header.scss'
import LanguageSelect from "@/components/atoms/LanguageSelect/LanguageSelect"

export default function Header() {

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
  
      const tl = gsap.timeline()
  
      tl.to('.header__top__logo img', {
        translateY: '0%',
        duration: 0.3,
        ease: 'ease'
      })

      tl.to('.header__top__wrapper__links a', {
        translateY: '0%',
        duration: 0.3,
        ease: 'ease',
        stagger: 0.05
      })
  
      tl.to('.header__top__wrapper__buttons a', {
        translateY: '0%',
        duration: 0.3,
        ease: 'ease',
        stagger: 0.05
      })
  
      tl.to('.header__top__wrapper__buttons .language-select__wrapper', {
        translateY: '0%',
        duration: 0.3,
        ease: 'ease',
      }, '<20%')

    })

    return () => ctx.revert()

  })

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__logo">
          <Logo
            color={true}
          />
        </div>
        <div className="header__top__wrapper">
          <div className="header__top__wrapper__links">
            <Link
              href={''}
              className="small"
            >
              Novinky
            </Link>
            <Link
              href={''}
              className="small"
            >
              FAQ
            </Link>
            <Link href={''}>
              <Image
                src={SearchIcon.src}
                alt="search"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div className="header__top__wrapper__buttons">
            <Button
              type="secondary"
              size="middle"
              icon={UserIcon.src}
            />
            <Button
              type="primary"
              size="middle"
              label="Kontaktujte nás"
            />
            <LanguageSelect />
          </div>
        </div>
      </div>
    </div>
  )
}
