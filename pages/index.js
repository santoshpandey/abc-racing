import Hero from "../components/Hero"
import Head from 'next/head'


export default function Home({ products }) {

  return (
    <div className="">
      <Head>
        <title>ABC Racing</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Racing, Car Racing, Racer Bikes, ABC Racing" />
        <meta property="og:title" content="ABC Racing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="abcracing.com" />
        <meta property="og:image" content="abcracing.com/share.png" />
        <meta property="og:description"
          content="Racing, Car Racing, Racer Bikes, ABC Racing" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ABC Racing" />
      </Head>
      <Hero  />
      <h1 className="text-grey-600 text-5xl font-bold m-2" id="fixture"> 
      January 2022 Fixture 
      </h1> 
        <div className ="m-8 p-8 grid bg-indigo-900	grid-rows-2 
                     grid-flow-col gap-4 auto-rows-auto"> 
            <div className = "p-8 m-2 bg-slate-200">
            <span className="text-3xl">Saturday 1st January</span>
                <p>Lyon Racing 92</p>
            </div> 
            <div className = "p-8 m-2 bg-slate-200">
             <span className="text-3xl">Sunday 2nd January</span>
            <p>Racing 92 Clermont Auvergene</p>
            </div> 
        </div>

        <h1 className="text-grey-600 text-5xl font-bold m-2" id="topfive"> 
      Top 5 Players
      </h1> 
        <div className ="m-8 p-8 grid bg-slate-500 grid-rows-2 
                     grid-flow-col gap-4 auto-rows-auto"> 
            <div className = "p-8 m-2 bg-slate-200">
            <strong>Giovinazzi</strong>
            </div> 
            <div className = "p-8 m-2 bg-slate-200">
               <strong>Schumacher</strong>
            </div> 
        </div>
    </div>
  )
}

export async function getStaticProps() {
  //const products = await getProductsInCollection()
  return {
    props: {  }, // will be passed to the page component as props
  }
}