import React from "react"

import gsap from "gsap"


export default class TitleText extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            
            color: {
                r : 255,
                g : 255,
                b : 255
            }
        }

        this.elRef = null;

        this.updateMousePosition = this.updateMousePosition.bind(this)
    }

    componentDidMount() {

        // set color and position

        document.addEventListener('mousemove', this.updateMousePosition);


        let h = "";
    }

    componentWillUnmount() {

        document.removeEventListener('mousemove', this.updateMousePosition)
    }

    componentDidUpdate() {

        // update colors and position with gsap
    }

    updateMousePosition(e) {

        var color = {
            r : e.clientY / window.screen.availHeight * 255, // hue
            g : e.clientX / window.screen.availWidth * 255, // saturation
            b : (((e.clientX / window.screen.availHeight) + e.clientY / window.screen.availWidth) / 2) * 255 // lightness
        }

        this.setState({
            color: color,
            x : e.clientX,
            y : e.clientY
        }, () => {

            if(this.props.col === "aqua") {
                gsap.to([this.elRef], {color : `rgb(0, ${this.state.color.r + 100}, ${this.state.color.g + 100})`, x : ((Math.random() * this.state.x) + 1) / 10, y : ((Math.random() * this.state.x) + 1) / 10, duration : 2})
    
            }
    
            if(this.props.col === "pink") {
                gsap.to([this.elRef], {color : `rgb(${this.state.color.r + 100},0, ${this.state.color.g + 100})`, x : ((Math.random() * this.state.x) + 1) / 10, y : ((Math.random() * this.state.x) + 1) / 10,duration : 2})
    
            }
    
            if(this.props.col === "yellow") {
                gsap.to(this.elRef, {color : `rgb(${this.state.color.r + 100}, ${this.state.color.g + 100}, 0)`, x : ((Math.random() * this.state.x) + 1) / 10, y : ((Math.random() * this.state.x) + 1) / 10,duration : 2})
    
            }
        })





    }

    render() {

        return (

            <h1 className = {this.props.className} ref = {div => this.elRef = div} >{this.props.text}</h1>
        )
    }

}