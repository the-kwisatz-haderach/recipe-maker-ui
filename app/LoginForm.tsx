'use client'

import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'
import Button from '@/components/Button/Button'
import Input from '@/components/Form/Input/Input'
import Label from '@/components/Form/Label/Label'
import Heading from '@/components/Heading/Heading'
import Link from '@/components/Link/Link'

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
      replace('/dashboard')
    }
  }

  return (
    <>
      <Heading tag="h2" className="mt-10 text-center">
        Sign in to your account
      </Heading>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <div className="mt-2">
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {/* <div className="text-sm">
                <Link href="#">Forgot password?</Link>
              </div> */}
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div>
            <Button type="submit">Sign in</Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account? <Link href="/signup">Sign up here</Link>
        </p>
      </div>
    </>
  )
}
