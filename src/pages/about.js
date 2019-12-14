import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class About extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isLoaded : true
        }
    }

    render() {

        return (

            <Layout>
                <SEO title="About" />
                <h2>About</h2>
                <p><strong>My name is Brad</strong> and I live with my family in Metro Vancouver, BC, Canada. There's five of us, including three littles. It's loud and mostly fun and I wouldn't trade it.</p>
                
                <p><strong>I like planning and building things,</strong> and "cultivating" is another favourite word of mine. Ideas, family, faith, bonsai trees, landscapes, play houses in the backyard, interior railings (although I find it stressful to measure in 1/32nds so I just did it once). </p>
                
                <p>I've learned that starting is fun, finishing is hard, and "don't skimp on the last $1000, because that's what will make you smile." Too true.</p>
                
                <p><strong>I built my first website in 2008.</strong> It was terrible. Like really terrible. I don't know why I thought I should try. Thankfully someone told me so and also gave me a second chance. They shouldn't have, but I took it and did (slightly) better the next time. Since then I've kept on going back aiming to do slightly better the next time. </p>


            </Layout>

        )
    }
}