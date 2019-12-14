import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasLoaded : true
        }
    }

    render() {

        return (
            <Layout>
                <SEO title="Projects" />

                <h2>Projects</h2>
                <p>It's possible you're here to see a bit of what I've done. I hope this helps.</p>
                <hr />

                <h3>ufgca.com</h3>
                <p><strong>2010-present</strong></p>
                <p>The primary site for my employer over this time, I've worked on the front end through three redesigns of the site, beginning in 2010.</p>
                <p>The first one was pure PHP, had a LOT of rounded corners, folder-type tabs and gradients. The second one launched in 2013, was fully responsive, did some nice AJAX stuff, looked like it got hit in the face by a swarm of icons, and STILL had a lot of rounded corners. I did a 2.5 update in 2017 where I rebuilt an e-comm section on React and I spontaneously danced on my desk a lot in those days. </p>
                <p>
                The third one is in progress, is built entirely on React using next.js, has a headless CMS for content generation, we use words like "transpile" now, and STILL has lots of rounded corners.
                </p>
                <p>
                    <a href="https://www.ufgca.com">Check it out.</a>
                </p>

                <h3>unitedfloral.ca</h3>
                <p>
                    <strong>2017-present</strong>
                </p>
                <p>The primary site for the sister company of my employer. I did this at the request of the head of the IT Dept; he said we were building on Wordpress, the rest was up to me. We launched the site June 2017.</p>
                <p>There's something to say for paying $25 for a plugin and being on your merry way in 15 minutes, and Wordpress gets you there. We had a short window of time to build the site, which also had an e-comm component, so we built it on Wordpress and dropped in Woocommerce. Add in some customisation because it was a wholesale business, do some staff training, and BAM we were live.</p>
                <p>There was a predecessor site to this one that did about $10k/month in sales, two years down the road from the release the new site averaged about $50k/month. Not bad.</p>
                <p>
                    <a href="http://www.unitedfloral.ca">Check it out.</a>
                </p>

                <h3>Brad's Budget Calculator</h3>
                <p>I built this somewhere around 2017, mostly to play around with MYSQL a bit. I use it to run our family budget and I do quite like it. I also realized part way through building it that I could have done the whole thing in Excel in about 10 minutes, but where's the fun in that?</p>
                <p>This was probably the last thing I did before checking out "this React thing" a friend was needling me to try. It would have been a lot easier...</p>
                <p>
                    <a href="https://github.com/itsbradsnider/monthly-budget-calculator">Source code on Github</a>
                </p>

                <h3>itsbradsnider.ca</h3>
                <p>I decided to make my own site so I could say I did. I used gatsby.js, moment.js, gsap, whatever I felt like experimenting with.</p>
                <p>Anyways. I made my own site.</p>


            </Layout>
        )
    }
}