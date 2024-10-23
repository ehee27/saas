import { BrandLogo } from '@/components/ui/BrandLogo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className="flex py-4 shadow bg-background">
      <nav className="flex items-center gap-10 container">
        <Link className="mr-auto" href={'/dashboard'}>
          <BrandLogo></BrandLogo>
        </Link>
        <Link href={'/dashboard/products'}>Products</Link>
        <Link href={'/dashboard/analytics'}>Analytics</Link>
        <Link href={'/dashboard/subscriptions'}>Subscriptions</Link>
        <UserButton />
      </nav>
    </header>
  )
}

export default NavBar
