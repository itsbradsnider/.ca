import React from "react"
import { gsap } from "gsap"

export default class CursorTracker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialLoadComplete : false,
            delayIncrement : 10, //s
            sizeDecrement : 1, // px
            dotAmount : 9,
            cursorArr : [],
            size : 15
        }

    }

    componentDidMount() {

        // add the CursorDots based on the dotAmount

       var cursorArr = [];

        for(var i = 0; i < this.state.dotAmount; i++) {

            cursorArr.push(
                <CursorDot 
                    delay = {i * 0.03}
                    size = {this.state.size - (this.state.sizeDecrement * i)}
                    key = {i}             
                />
            )
        }

        this.setState({
            cursorArr : cursorArr
        }, () => {
            this.setState({
                initialLoadComplete : true
            })
        })

    }

    render() {

        return (

            this.state.initialLoadComplete && (
                this.state.cursorArr.map(cursor => cursor)

            )
        )

    }
}


class CursorDot extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            size : this.props.size,
            opacity : 0

        }

        this.dotRef = React.createRef();

        this.updateMousePosition = this.updateMousePosition.bind(this);

    }

    componentDidMount() {

        // onload, get initial mouse position
        document.addEventListener('mousemove', this.updateMousePosition);
    }

    componentWillUnmount() {

        document.removeEventListener('mousemove', this.updateMousePosition)

    }

    updateMousePosition(e) {

        gsap.to(this.dotRef, {opacity: 1, top : e.clientY, left : e.clientX, duration : 0.25, ease : "back", delay : this.props.delay})

    }

    render() {

        var trackerStyles = {
            opacity : this.state.opacity,
            height: `${this.state.size}px`,
            width: `${this.state.size}px`

        }

        return (
            <span className = "cursor-tracker" ref = {div => this.dotRef = div} style = {trackerStyles}></span>
        )
    }
}