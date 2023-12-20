import React, { PropsWithChildren } from 'react'
import Heading from '@/components/Heading/Heading'

type Props = PropsWithChildren<{}>

export default function Page({ children }: Props) {
  return (
    <div>
      <Heading tag="h2">Dashboard Home</Heading>
      <div>{children}</div>
    </div>
  )
}
