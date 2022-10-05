/* eslint-disable no-unused-vars */
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, my name is Nam Do, you can call me Nam. Im 24 years old. I am
            currently work as a frontend developer at CMC Global. I have more
            than one years experience in developing frontend applications.
          </p>
          <p>
            My main languages are HTML,CSS,JS. As a frontend developer, i am
            familiar with ReactJS and VueJS. I have maid some personal project
            using ReactJS and VueJS.
          </p>
          <p>
            My responsibility when i get a task or anythings else is very
            strict. I will try to finish my work right on time or early and
            rarely late. Im a type of person work hard play hard and have no
            fear when facing challenging work. In time i work for you, hope you
            will have good experience when corporate with me
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default About
