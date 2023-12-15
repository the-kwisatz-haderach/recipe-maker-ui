import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  htmlFor: string
  className?: string
}>

export default function Label({ children, htmlFor, className }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        'block text-sm font-semibold leading-6 text-gray-900',
        className
      )}
    >
      {children}
    </label>
  )
}
