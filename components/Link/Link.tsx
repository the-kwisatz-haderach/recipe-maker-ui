import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  PropsWithChildren<{}>

export default function Link({ children, className, ...props }: Props) {
  return (
    <a
      {...props}
      className={clsx(
        'font-semibold leading-6 text-lime-500 hover:text-lime-400',
        className
      )}
    >
      {children}
    </a>
  )
}
