/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_90gb5y6',
        refForm.current,
        'wuVEZE_uriRsDM_UX'
      )
      .then(
        () => {
          alert('Message successfully sent!!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again!')
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
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Nam do,
          <br />
          Vietnam
          <br />
          LK19 Romatic Park
          <br />
          Tay ho
          <br />
          <span>namdo2469x@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.554349041106!2d105.79397861531397!3d21.05051039241036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf1ccc2842d%3A0xf7c3060ebd5c5950!2sLK19%20Romantic%20Park!5e0!3m2!1svi!2s!4v1662972219027!5m2!1svi!2s"
            width="100%"
            height="100%"
            title='hehe'
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
