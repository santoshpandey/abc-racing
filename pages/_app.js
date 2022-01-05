import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import { NextIntlProvider } from 'next-intl'


function MyApp({ Component, pageProps }) {
  return(
    <NextIntlProvider
    formats={{
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        },
      },
    }}
       messages={pageProps.messages}
       now={new Date(pageProps.now)}
       timeZone="Austria/Vienna"
    >
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    </NextIntlProvider>
  ) 
}

export default MyApp
