import React, { PropsWithChildren } from 'react'
import Heading from '@/components/Heading/Heading'

type Props = PropsWithChildren<{}>

export default function Page({ children }: Props) {
  return (
    <div>
      <Heading tag="h2">Ingredients</Heading>
      <div>{children}</div>
    </div>
  )
}
