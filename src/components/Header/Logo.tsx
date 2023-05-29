import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/">
    <Image
      src={'/images/logo.png'}
      alt="logo"
      width={300}
      height={70}
    />
  </Link>
  )
}

export default Logo