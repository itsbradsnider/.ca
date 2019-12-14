import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class MyFavouriteThings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasLoaded : true
        }
    }

    render() {

        return (
            <Layout>
                <SEO title="My Favourite Things" />

                <h2>My Favourite Things</h2>
                <p>As a tribute to our inner Julie Andrews, here are a few of my favourite (web dev) things.</p>

                <hr />

                <h4>React</h4>
                <p>The first time I saw setState() do its thing with data fetched from the server, I laughed out loud. It stops me from making bad life decisions and now I want to React all the things.</p>

                <h4>Bootstrap</h4>
                <p>Because everyone loves a good tooltip and I love all the buttons. And Bootstrap 4 has even more buttons!</p>
                <h4>Sass</h4>
                <p>Variables on their own are worth it. And who doesn't like <i>background-color: lighten($color, 10%)</i>?</p>

                <h4>moment.js</h4>
                <p>Time in JS sucks. moment.js lets me flit around the Date object like I'm walking on pixie dust. Don't leave home without it.</p>

                <h4>Flexbox</h4>
                <p>The first day I rolled out a component styled on flexbox was a happy day and I want to center all the things just beacuse it's so dang easy.</p>

                <h4>gatsby.js/next.js</h4>
                <p>This little site is built on Gatsby and the fast-ability is awesome. Next adds in the ability to compile on the server for those little occassions where you need to populate dynamic content. I say YES to that.</p>
                <h4>hr /</h4>
                <p>Who doesn't love a good horizontal rule? Simple details, simple pleasures.</p>

                <h4>Codekit</h4>
                <p>Because clicking buttons is way more fun than typing <i>'grunt compile sass'</i> or <i>'npm run dev'</i> and as a bonus the author is *hilarious* and visting the website alone is worth it.</p>

                <h4>gsap</h4>
                <p>A relatively new find (for me), it's fun to watch (for me) how it makes little blue dots chase me around the screen.</p>

                <h4>Open Sans</h4>
                <p>I'm a sucker for sans-serif typefaces with *that* many width/weight options. Am I allowed to say that in Playfair Display?</p>

                <h4>awwwards</h4>
                <p>So many talented people, so much to learn.</p>
                </Layout>
        )
    }
}