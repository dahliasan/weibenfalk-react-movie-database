import Link from 'next/link'

type Props = {
  title: string
}

export default function Breadcrumb({ title }: Props) {
  return (
    <div className="bg-zinc-800">
      <div className="flex items-center max-w-7xl m-auto p-4 text-white text-lg">
        <Link href="/" className="hover:opacity-80 cursor-pointer duration-300">
          Home
        </Link>
        <span className="block px-2">|</span>
        <span className="font-bold truncate">{title}</span>
      </div>
    </div>
  )
}
