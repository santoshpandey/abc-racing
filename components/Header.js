import Link from 'next/link'
import Navbar from '../components/Navbar';

export default function Header() {
   return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              ABC Racing
            </span>
          </a>
        </Link>
        
        
      </div>
    </header>
  )
}