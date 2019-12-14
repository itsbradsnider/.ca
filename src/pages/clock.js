import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment-timezone"
import "../components/clock.css"

export default class Clock extends React.Component {

    constructor(props) {

        super(props)

        this.state = {

            time : moment(),
            timezone : this.props.timezone ? this.props.timezone : "America/Vancouver"
        }

        this.timer = null;

        this.updateTime = this.updateTime.bind(this)
    }

    componentDidMount() {

        this.timer = setInterval(this.updateTime, 1000)

    }

    componentWillUnmount() {

        clearInterval(this.timer);
    }

    updateTime() {

        this.setState({
            time : moment()
        })
    }

    render() {

        return (
            <Layout>
                <SEO title = "Clock" />
                <h2>Clock</h2>
                <p>I saw this fun little clock on the moment.js homepage and wanted to make my own. So I did. And yes: Taipei, Halifax and Cannon Beach.</p>

                <div>
                    <ClockFace 
                        time = {this.state.time}
                        timezone = "Asia/Taipei"
                        name = "Taipei"
                    />

                    <ClockFace 
                        time = {this.state.time}
                        timezone = "America/Halifax"
                        name = "Halifax"
                    />

                    <ClockFace 
                        time = {this.state.time}
                        timezone = "America/Vancouver"
                        name = "Cannon Beach"
                    />

                </div>               
            </Layout>

        )
        
    }
}

class ClockFace extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialLoadComplete : false,

        }

    }

    componentDidMount() {

        // set the numbers around the clock

        var i, 
            ticks = [];


        for (i = 0; i < 12; i++) {

            ticks = [...ticks, [
                <React.Fragment>
                    <div key = {i} className="clock-hand tick-container" style = {{transform : `rotate(${i * 30}deg)`}}>
                        <div className="tick"></div>
                    </div>
                </React.Fragment>

            ]]
        }

        this.setState({
            ticksAroundtheClock : ticks,
            initialLoadComplete: true
        })
    }

    render() {

        var time = this.props.timezone ? this.props.time.tz(this.props.timezone) : this.props.time;


        return (

            <div className="clock-container">
                <div className="clock-face">

                    {this.state.initialLoadComplete && this.state.ticksAroundtheClock.length && this.state.ticksAroundtheClock.map(tick => {

                        return (

                            tick
                        ) 
                    })}

 
                    <ClockHand type = "hour" time = {time} />
                    <ClockHand type = "minute" time = {time} />
                    <ClockHand type = "second" time = {time} />

                    <div className="clock-center"></div>

                </div>
                <div className="clock-name">
                    {this.props.name}
                </div>
                <div><small><Time time = {time} /></small></div>
            </div>


        )

    }
}

let ClockHand = props => {

    // 60 seconds per minute or 60 minutes per hour, 12 hours around the clock
    var     increments = props.type === "second" || props.type === "minute" ? 60 : 12,
            degreesMovedPerIncrement = 360 / increments;

            var position = 0;
            
            if(props.type === "second") {
                position = degreesMovedPerIncrement * props.time.second() + 180; 
            }

            if(props.type === "minute") {
                position = degreesMovedPerIncrement * props.time.minute() + 180; // 
            }

            if(props.type === "hour") {

                // we want the hour hand to move incrementally towards the next hour so we need to add
                // in the percentage we are through the hour and that is also how far in percent the hour
                // hand is between the current hour and the next
                position = degreesMovedPerIncrement * (props.time.hours()) + 180 + (props.time.minute()/60 * degreesMovedPerIncrement);
            }
            


    let handPosition = {
        transform : `rotate(${position}deg)`
    }

    return (
        <div className={`clock-hand --${props.type}`} style = {handPosition}></div>
    )
}

function Time(props){

    return (

        <div style = {{textAlign : "center", fontFamily: "Poppins"}}>
            <strong>{props.time.format('h:mm:ss a')}</strong>
             <br />
            {props.time.format('MMM Do YYYY')}
        </div>


    )
}

