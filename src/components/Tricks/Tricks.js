import React from "react";
import "./Tricks.css"

const Tricks = ({id, name, obstacle, stance, tutorial}) => {
    return (
        <div className="trick-card">
            <h4>{stance} {name}</h4>
            <h4>Obstacle: {obstacle}</h4>
            <h4>Link to tutorial</h4>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default Tricks