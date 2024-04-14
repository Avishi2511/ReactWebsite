import "./MainImg2Styles.css"

import React, { Component } from 'react'

class MainImg2 extends Component {
    render(){
        const headingStyle = {
            '--bg-img': `url(${this.props.imgsrc})`,
        };

        return (
            <div className="main-img">
                <div className="heading" style={headingStyle}>
                    <h1>{this.props.heading}</h1>
                    <br></br>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )        
    }
}

export default MainImg2