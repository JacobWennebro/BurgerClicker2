import React, { Component } from "react";

interface Props {
    onClick: () => void;
}

export default function Burger(props: Props) {
    
    

    return (
        <div onClick={props.onClick} className="burger">
            <div className="burger__bun top burger-item"></div>

            <div className={`burger__patty burger-item`}></div>

            {/* Defaults */}
            <div className="burger__cheese burger-item"></div>
            <div className="burger__patty burger-item"></div>

            <div className="burger__bun bottom burger-item"></div>
        </div>
    );
}
