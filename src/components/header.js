import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import TitleText from "../components/titleText"

const Header = ({ siteTitle }) => (

  <React.Fragment>
  <header>
    <TitleText className = "its" text = "It's" col = "aqua" />
    <TitleText className = "brad" text = "Brad" col = "pink" />
    <TitleText className = "snider" text = "Snider" col = "yellow" />

    <nav>
      <ul>
        <li><Link to="/" activeStyle={{color : "#8c8c8c", textDecoration : "line-through"}}>home</Link></li>
        <li><Link to = "/about" activeStyle={{color : "#8c8c8c", textDecoration : "line-through"}}>about</Link></li>
        <li><Link to ="/my-favourite-things" activeStyle={{color : "#8c8c8c", textDecoration : "line-through"}}>my favourite things</Link></li>
        <li><Link to="/clock" activeStyle={{color : "#8c8c8c", textDecoration : "line-through"}}>clock</Link></li>
        <li><Link to="/projects" activeStyle={{color : "#8c8c8c", textDecoration : "line-through"}}>projects</Link></li>
      </ul>
    </nav>

    <span className="nav-btn">
      <div></div>
      <div></div>
      <div></div>
    </span>
  </header>

  </React.Fragment>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
