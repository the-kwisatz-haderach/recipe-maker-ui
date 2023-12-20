import React from 'react'
import Link from '../Link/Link'

type Props = {}

export default function Navigation({}: Props) {
  return (
    <nav className="flex w-full items-center justify-between bg-white px-6 py-4">
      <a href="/dashboard">
        <p>Recipe Maker</p>
      </a>
      <form action="/api/logout">
        <button type="submit">Log out</button>
      </form>
    </nav>
  )
}
