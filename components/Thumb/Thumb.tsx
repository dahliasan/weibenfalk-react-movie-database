import React from 'react'
import Image from 'next/image'

type Props = {
  imgUrl: string
}

export default function Thumb({ imgUrl }: Props) {
  return (
    <Image
      src={imgUrl}
      alt="movie-thumbnail"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAAEElEQVR42mNk+M8ABoxEMAB9NwUBPsLFkgAAAABJRU5ErkJggg=="
      className="rounded-lg"
      fill
      sizes="500px"
      style={{ objectFit: 'cover' }}
    />
  )
}
