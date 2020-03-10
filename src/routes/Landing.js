import React, { useContext } from 'react'
import '../styles/Landing.css'
import LandingImage from '../images/map-min.png'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AuthContext } from '../auth/Auth'
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Landing() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div>
      <header className="py-2">
        <nav className="landing-nav mx-auto px-4">
          <h1 className="mr-2"> wander </h1>
          <span className="mx-2 hline"> | </span>
          <a className="mx-2" href="./"> downloads </a>
          <a className="mx-2" href="./"> documentation </a>
          <a className="mx-2" href="./"> support </a>
          {!currentUser ?
            <Link to="/login" className="ml-auto">
              <button className="ml-auto outline-button">
                login &nbsp;<FontAwesomeIcon icon="sign-in-alt" />
              </button>
            </Link>
            :
            <Link to="/app" className="ml-auto">
              <button className="ml-auto outline-button">
                wander &nbsp;<FontAwesomeIcon icon="globe-americas" />
              </button>
            </Link>
          }
          <span className="mx-2 ml-3 hline"> | </span>
          <FontAwesomeIcon icon="language" className="mx-2 py-1 med-icon" />
        </nav>
      </header>
      <div>
        <div className="content-section py-55">
          <h2 className="mb-2"> for the lost, found, and in-betweens. </h2>
          <p className="mb-4"> A geolocative message board, based in every pocket of the world. Stay comfy near <br /> home or take a peek past undiscovered horizons. </p>
          <div className="button-group">
            <button className="px-4 mx-2 fill-button"> <FontAwesomeIcon icon="code" className="active mr-2" /> Open Web App </button>
            <button className="px-4 mx-2 fill-button"> <FontAwesomeIcon icon="desktop" className="active mr-2" /> Download for Windows </button>
          </div>
          <LazyLoad once >
            <img className="mt-3 map-img" src={LandingImage} alt="landing"></img>
          </LazyLoad>
        </div>
      </div>
      <footer className="mb-4">
        <div className="footer-menu py-4 px-6">
          <div className="socials">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            <FontAwesomeIcon icon={["fab", "youtube-square"]} />
            <FontAwesomeIcon icon={["fab", "github"]} />
          </div>
          <div className="footer-nav ml-4">
            <div className="mx-3 mb-3">
              <h3 className="mb-1"> product </h3>
              <ul>
                <li> <a href="./">web</a> </li>
                <li> <a href="./">desktop</a> </li>
                <li> <a href="./">ios</a> </li>
                <li> <a href="./">android</a> </li>
              </ul>
            </div>
            <div className="px-3 mb-3">
              <h3 className="mb-1"> wander for organizations </h3>
              <ul>
                <li> <a href="./">schools</a> </li>
                <li> <a href="./">communities</a> </li>
                <li> <a href="./">businesses</a> </li>
              </ul>
            </div>
            <div className="px-3 mb-3">
              <h3 className="mb-1"> resources </h3>
              <ul>
                <li> <a href="./">documentation</a> </li>
                <li> <a href="./">api</a> </li>
                <li> <a href="./">support</a> </li>
                <li> <a href="./">privacy/terms</a> </li>
              </ul>
            </div>
            <div className="px-3 mb-3">
              <h3 className="mb-1"> company </h3>
              <ul>
                <li> <a href="./">about us</a> </li>
                <li> <a href="./">news</a> </li>
                <li> <a href="./">jobs</a> </li>
              </ul>
            </div>
            <div className="flex-spacer">
            </div>
          </div>
        </div>
        <hr></hr>
        <h4>© Copyright 2020 Al Yin.</h4>
      </footer>
    </div>
  )
}

export default withRouter(Landing)