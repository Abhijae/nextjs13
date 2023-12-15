import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
        
          <h1>Dojo help desk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets HELLO</Link>
        </nav>
  )
}
