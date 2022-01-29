import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Feroz S. Mutimeer Personal Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Welcome to My site</h1>
      </main>
    </div>
    </Layout>
  )
  
}
