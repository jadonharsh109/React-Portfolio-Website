import './Contact.style.scss'
import AnimatedLetters from './../home/animatedLetters/Animatedletters.component.jsx'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_o6g7qfj',
        'template_lugib7c',
        refForm.current,
        'bAAvRmzTas9FJUS2Y'
      )
      .then(
        () => {
          alert('Message have been sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '_', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="from_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_mail"
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Harshvardhan Jadon,
          <br />
          India,
          <br />
          8A, New Govindpuri,
          <br />
          City Center, Gwalior
          <br />
          Madhya Pradesh <br />
          <span>techharsh14@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.203752922540474, 78.20186402365628]} zoom={16}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.203752922540474, 78.20186402365628]}>
              <Popup>Harsh lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
