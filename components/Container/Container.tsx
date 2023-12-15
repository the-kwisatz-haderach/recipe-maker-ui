import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  className?: string
}>

export default function Container({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'rounded-md border border-solid border-slate-200 bg-white px-2',
        className
      )}
    >
      {children}
    </div>
  )
}
