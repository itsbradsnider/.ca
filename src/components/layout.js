/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { relative } from "path"

import CursorTracker from "../components/cursor-tracker"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="content-container">
        <main>{children}</main>
        

        <CursorTracker />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
