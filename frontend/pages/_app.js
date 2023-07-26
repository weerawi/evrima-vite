import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', 
    objectFit: 'cover',
    opacity: 0.85,
    zIndex: -1
  };
  return (
    <>

      <Head>
          <title>Evrima</title>



          {/*   //////////////// search icon details  ///////////////////  */}




          <meta
              name="description"
              content="Generated by create next app"
          />
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
          />
           
      </Head>

      <Header/>
      <main   style={{backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
      <style>
        {`
          ::selection {
            color: red;
            background-color: cyan;
          }
        `}
      </style>
       
        <Component {...pageProps} />

      </main>
      <Footer/>
    </>
  )
}
