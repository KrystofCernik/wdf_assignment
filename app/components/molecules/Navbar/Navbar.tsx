'use client'
import { gsap } from 'gsap'
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/atoms/Button/Button"
import { useEffect, useLayoutEffect } from 'react'


import LogoIcon from '@/assets/logos/logo-icon.svg'
import UserIcon from '@/icons/user.svg'
import TalkIcon from '@/icons/jazyk.svg'
import './Navbar.scss'
import { secureHeapUsed } from 'crypto'

export default function Navbar() {

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
  
      gsap.to('.navbar', {
        opacity: 1,
        duration: 0.3,
        ease: 'ease',
        delay: 1
      })

    })

    return () => ctx.revert()

  })

  useEffect(() => {
    
    let scrollY: number

    window.addEventListener('scroll', () => {

      scrollY = window.scrollY

      if (scrollY > 80) {
        gsap.to('.navbar__logo, .navbar__buttons', {
          opacity: 1,
          ease: 'ease',
          duration: 0.3
        })
      } else {
        gsap.to('.navbar__logo, .navbar__buttons', {
          opacity: 0,
          ease: 'ease',
          duration: 0.3
        })
      }
    })

  }, [])

  return (
    <div className='navbar__wrapper'>
      <nav className='navbar'>
        <Image
          src={LogoIcon.src}
          alt='logo'
          width={64}
          height={64}
          className="navbar__logo"
        />
        <ul>
          <Link href={''}>
            Novinky
          </Link>
          <Link href={''}>
            Neplodnost
          </Link>
          <Link href={''}>
            Genetika
          </Link>
          <Link href={''}>
            Gynekologie
          </Link>
          <Link href={''}>
            Dárcovství
          </Link>
          <Link href={''}>
            Úspěšnost
          </Link>
          <Link href={''}>
            Ceník
          </Link>
        </ul>
        <div className="navbar__buttons">
          <Button
            type="secondary"
            size="middle"
            icon={UserIcon.src}
          />
          <Button
            type="primary"
            size="middle"
            icon={TalkIcon.src}
          />
        </div>
      </nav>
    </div>
  )
}
