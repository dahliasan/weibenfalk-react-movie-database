import React from 'react'
import Thumb from '../Thumb/Thumb'

type Props = {
  imgUrl: string
  title: string
  subtitle?: string
}

export default function Card({ imgUrl, title, subtitle }: Props) {
  return (
    <div className="h-80">
      <div className="relative h-full">
        <Thumb imgUrl={imgUrl} />
        <div className="absolute w-full bottom-0 px-4 rounded-b-xl bg-zinc-800">
          <h2 className="text-cyan-200 text-center text-sm truncate">
            {title}
          </h2>

          {subtitle && (
            <p className="text-cyan-400 text-center text-xs truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
