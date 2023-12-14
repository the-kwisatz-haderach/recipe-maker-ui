'use client'

import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'
import styles from './SignupForm.module.css'

export default function SignupForm() {
  const { replace } = useRouter()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username?: { value?: string }
      password?: { value?: string }
      email?: { value?: string }
    }
    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: target?.username?.value || '',
        password: target?.password?.value || '',
        email: target?.email?.value || '',
      }),
    })
    if (res.ok) {
      replace('/login')
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
      <button type="submit">Sign up</button>
    </form>
  )
}
