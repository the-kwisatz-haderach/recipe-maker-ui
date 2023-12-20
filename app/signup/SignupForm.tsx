'use client'

import { useRouter } from 'next/navigation'
import { FormEventHandler } from 'react'
import Button from '@/components/Button/Button'
import Input from '@/components/Form/Input/Input'
import Label from '@/components/Form/Label/Label'
import Heading from '@/components/Heading/Heading'
import Link from '@/components/Link/Link'

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
      replace('/')
    }
  }

  return (
    <>
      <Heading tag="h2" className="mt-10 text-center">
        Create new account
      </Heading>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <div className="mt-2">
              <Input id="username" name="username" type="text" required />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="mt-2">
              <Input id="password" name="password" type="password" required />
            </div>
          </div>

          <div>
            <Button type="submit">Create account</Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account? <Link href="/">Login here</Link>
        </p>
      </div>
    </>
  )
}
