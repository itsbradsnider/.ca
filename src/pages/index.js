import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    
      <h2>Hi, I'm Brad.</h2>
      <p>Welcome to my online playground.</p>

      <h3>A little story...</h3>
      <p>
        I once spent a month painting someone's house. I painted <span style = {paleYellow}>a bathroom pale pale yellow</span>, <span style = {paleGreen}>the sunroom pale pale green</span>, <span style = {paleBlue}>a bedroom pale pale blue</span>, the living room pale pale... white... 
      </p>
      
      <p>
        Shortly after this I painted a room as part of a personal project, <span style = {purple}>and painted it deep deep purple <em> just because it was mine and I could.</em></span> 
      </p>

      <p>
        I like to build stuff, websites included. I mostly do it for other people, hence this place: because it's mine, and <em>sometimes</em> you just need to paint something deep deep purple.
      </p>
  </Layout>
)

const paleYellow = {
  backgroundColor: "#ffffe6"
}

const paleGreen = {
  backgroundColor : "#f2ffe6"
}

const paleBlue = {
  backgroundColor: "#e6faff"
}

const purple = {
  backgroundColor : "#6b00b3",
  color: "white"
}

export default IndexPage
