import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
  className?: string
}

export default function Grid({ title, children, className }: Props) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold pb-4">{title}</h2>
      <div className="grid grid-cols-auto-fill gap-8">{children}</div>
    </div>
  )
}
