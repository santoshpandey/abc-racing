import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';



export default function Navigation() {
  const t = useTranslations('Navigation');
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);
  const [active, setActive] = useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme('EN');

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;


  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center font-sans flex-wrap bg-th-background-secondary p-3 '>
      <div className="inline-flex items-center p-2 mr-4 ">
        <Link href="/" passHref>
          <a className="cursor-pointer text-th-accent-medium">
            <span className="text-lg pt-1 font-bold">
              ABC Racing
            </span>
          </a>
        </Link>
        </div>
      <button className='inline-flex p-3 hover:bg-cyan-900 rounded lg:hidden text-cyan-900 ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
        <Link href="/">
          <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-th-accent-medium font-bold items-center justify-center hover:bg-cyan-600 hover:text-white'>{t('index')}</a>
        </Link>
        <Link href="/#fixture">
          <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-th-accent-medium font-bold items-center justify-center hover:bg-cyan-600 hover:text-white'>{t('fixture')}</a>
        </Link>
        <Link href="/#topfive">
          <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-th-accent-medium font-bold items-center justify-center hover:bg-cyan-600 hover:text-white'>{t('topfive')}</a>
        </Link>
        {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a  onClick={() => setTheme(t('switchLocale', { locale: otherLocale }))} className='text-rose-900 font-bold underline decoration-dotted'>{t('switchLocale', { locale: otherLocale })}</a>
        </Link>
      )}
      
      </div>
      </div>
    </nav>
  )
}