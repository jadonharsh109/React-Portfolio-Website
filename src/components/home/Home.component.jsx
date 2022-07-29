import './Home.style.scss'
import { useState } from 'react'
import '../layout/Layout.style.scss'
import LogoTitle from '../../assets/images/logoH1.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from './animatedLetters/Animatedletters.component'
import { useEffect } from 'react'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ["_",'H', 'a', 'r', 's', 'h']
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
      <img className='harsh-logo harsh-logo1' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo2' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo3' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo4' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo5' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo6' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo7' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo8' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo9' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo10' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo11' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo12' src={LogoTitle} alt="My Name" />
      <img className='harsh-logo harsh-logo13' src={LogoTitle} alt="My Name" />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
