import Link from 'next/link'
import Image from 'next/image'
import SearchInput from '../SearchInput/SearchInput'

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setQuery }: Props) => (
  <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900 ">
    <div className="flex justify-between items-center w-full h-full max-w-7xl mx-auto px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            className="invisible md:visible"
            width="150"
            height="150"
            src="/rmdb-logo.svg"
            alt="rmdb-logo"
          />

          <Image
            className="absolute md:invisible pt-2"
            width="42"
            height="42"
            src="/rmdb-logo-small.svg"
            alt="rmdb-logo-small"
          />
        </div>
      </Link>
      {setQuery && (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      )}
    </div>
  </div>
)

export default Header
