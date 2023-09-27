import { Link } from 'react-router-dom'
import './AboutUs.css'
import me from './me.jpg'

const AboutUs = props => {
    return (
      <>
        <h1>About Us</h1>
        <p>Hi there! This is Allison Ji.</p>
        <p>
        I am currently a senior student studying at New York University and majoring in Computer and Data Science. My interests include photography, travel, piano, cooking, and video game. I am from China and came to New York two years ago. My hometown is <a href="https://en.wikipedia.org/wiki/Xiamen">Xiamen</a>, a very beautiful small city near the sea. Nevertheless, I actually spent most of my childhood in Shenzhen, a big international city in which people live a hectic pace of life.
        </p>
        <img src={me} alt="a photo of myself" />
      </>
    )
  }

// make this component available to be imported into any other file
export default AboutUs
