import {useState} from 'react';
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const state = useState();
	
	return (
    <div className={styles.page}>
      <Head>
        <title>Upstreet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
			
			<div className={styles.characters}>
			  
			</div>
    </div>
  )
}