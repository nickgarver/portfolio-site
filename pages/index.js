import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Works from '../components/works'
import About from '../components/about'
import { faCoffee, faUserCircle, faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
  const [myTab, setTab] = useState(true);
  const style1 = {
      boxShadow: myTab ? 'inset 0 -9px 0px -6px black' : 'inset 0 0px 0px 0px black',
      color: myTab ? '#1e272e' : '#a1a2b0'
  }
  const style2 = {
      boxShadow: !myTab ? 'inset 0 -9px 0px -6px black' : 'inset 0 0px 0px 0px black',
      color: !myTab ? '#1e272e' : '#a1a2b0'
  }

  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className='head'>
          <div className='head-left'>
              <Link href="/"> Nick Garver </Link>
          </div>

          <div className='head-right'>

            <div style={style1} onClick={() => setTab(true)}>
              <FontAwesomeIcon className="top-icn" icon={faHome} />
              <span className="top-txt">Works</span>
            </div>

            <div style={style2} onClick={() => setTab(false)}>
              <FontAwesomeIcon className="top-icn" icon={faUserCircle} />
              <span className="top-txt">About</span>
            </div>

          </div>

      </div>
      <main>
        {myTab && <Works></Works>}
        {!myTab && <About></About>}
      </main>
      <footer>
          <div className="footer-info">
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" >
              Nick Garver 2024{' '}
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/nickgarver" ><FontAwesomeIcon className="socials-icn" icon={faGithubAlt} /></a>
            <a href="https://twitter.com/internetboy999" ><FontAwesomeIcon className="socials-icn" icon={faTwitter} /></a>
            <a href="https://instagram.com/internetboy" ><FontAwesomeIcon className="socials-icn" icon={faInstagram} /></a>
          </div>
      </footer>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
          position: relative;
        }
      `}</style>
    </div>
  )
}
