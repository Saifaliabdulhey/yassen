import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home_container">
      <div className="loader"></div>
      <img src={logo} />
      <h1>Welcom to AL-SAFEE AL-MOTAHIDA</h1>
      <p>Our company is all time active
        we can help you find your nice american car!</p>
      <Link to='/landing'><button to='/landing'>View States</button></Link>
      <div class="elfsight-app-e020585a-69ae-4291-87df-3b67169af5cf"></div>
    </div>
  )
}

export default Home