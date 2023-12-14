'use client'

import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const { replace } = useRouter()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username?: { value?: string }
      password?: { value?: string }
    }
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: target?.username?.value || '',
        password: target?.password?.value || '',
      }),
    })
    if (res.ok) {
      replace('/')
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <button type="submit">Login</button>
    </form>
  )
}
