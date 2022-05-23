import React, { Component, createRef, MouseEvent, RefObject } from 'react'

export default class Burger extends Component {

    render() {
        return (
            <div className="burger">
                <div className="burger__bun top burger-item"></div>

                <div className={`burger__patty burger-item`}></div>                

                {/* Defaults */}
                <div className="burger__cheese burger-item"></div>
                <div className="burger__patty burger-item"></div>

                <div className="burger__bun bottom burger-item"></div>
            </div>
        )
    }
}
