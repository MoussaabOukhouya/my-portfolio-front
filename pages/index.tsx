import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moussaab&#39;s Portfolio</title>       
      </Head>

      { /* HEADER */}
      <Header />

      { /* HERO */}
      
      { /* About */}
      
      { /* Experience */}
      
      { /* Skills */}

      { /* Projects */}
      
      { /* Contact */}

    </div>
    
  )
}

