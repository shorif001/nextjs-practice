import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/"> Home</Link>
        <Link href="/about"> About</Link>
        <Link href="/users"> Users</Link>
         
      </ul>
    </div>
  )
}

export default navbar