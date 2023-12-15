import clsx from 'clsx'
import { PropsWithChildren, createElement } from 'react'

type Props = PropsWithChildren<{
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}>

const sizeMap: Record<Props['tag'], string> = {
  h1: 'text-2xl',
  h2: 'text-2xl',
  h3: 'text-2xl',
  h4: 'text-2xl',
  h5: 'text-2xl',
  h6: 'text-2xl',
}

export default function Heading({ tag, className, children }: Props) {
  return createElement(
    tag,
    {
      className: clsx(
        'mt-10 font-bold leading-9 tracking-tight text-gray-900',
        sizeMap[tag],
        className
      ),
    },
    children
  )
}
