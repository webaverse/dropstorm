import {useState} from 'react';
import Head from 'next/head'
import * as THREE from '../three.module.js';
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

const characters = [
	{
		name: 'Scillia',
		imgSrc: 'characters/scillia.png',
		class: 'Drop Hunter',
	},
	{
		name: 'Drake',
		imgSrc: 'characters/drake.png',
		class: 'Hacker Supreme',
	},
	{
		name: 'Hyacinth',
		imgSrc: 'characters/hyacinth.png',
		class: 'Beast Influencer',
	},
	{
		name: 'Juniper',
		imgSrc: 'characters/juniper.png',
		class: 'Academy Engineer',
	},
	{
		name: 'Anemone',
		imgSrc: 'characters/anemone.png',
		class: 'Lisk Witch',
	},
];

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
