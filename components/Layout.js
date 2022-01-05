import React from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  const t = useTranslations('Index');
  const { locale } = useRouter();
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header title={t('title')} locale={locale} />
      <main className='bg-th-background'>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}