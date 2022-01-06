import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import { NextIntlProvider } from 'next-intl'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

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

// Performance Check 
export function reportWebVitals(metric) {
  const {name, value} = metric;
  switch (name) {
    case "FCP":
      console.log('FCP :-', metric);
      if (value > 2000 && value <= 4000) {
        console.warn(
          `${name} value ${value} is in a bit out of range and the speed is moderate.`
        );
        console.info(
          "FCP Warning",
          "The speed of loading this page may be moderate."
        );
      }
  // can be replaced this with method which will send to monitor further
      break;
    case "LCP":
      console.log('LCP :-', metric);
      break;
    case "CLS":
      console.log('CLS :-', metric);
      break;
    case "FID":
      console.log('FID :-', metric);
      break;
    case "TTFB":
      console.log('TTFB :-', metric);
      break;
    default:
      break;
  }
}

export default MyApp
