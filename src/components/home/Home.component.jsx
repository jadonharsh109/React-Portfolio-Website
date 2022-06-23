import './Home.style.scss'
import { useState } from 'react'
import '../layout/Layout.style.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from './animatedLetters/Animatedletters.component'
import { useEffect } from 'react'
import Logo from './animatedLetters/Logo/Logo.component'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    '_',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(()=>{
     setTimeout(()=>{
      return(setLetterClass("text-animate-hover"))
    },4000)
  },[])
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="My Name" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2 class>Frontend Developer | Networking | Reactjs</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
