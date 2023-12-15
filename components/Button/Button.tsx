import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  PropsWithChildren<{}>

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600',
        className
      )}
    >
      {children}
    </button>
  )
}
