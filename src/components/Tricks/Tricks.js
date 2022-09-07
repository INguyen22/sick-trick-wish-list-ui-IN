import React from "react";
import "./Tricks.css"

const Tricks = ({id, name, obstacle, stance, tutorial, deleteTrick}) => {
    return (
        <div className="trick-card">
            <h4>{stance} {name}</h4>
            <h4>Obstacle: {obstacle}</h4>
            <h4>Link to tutorial</h4>
            <a href={tutorial}>{tutorial}</a>
            <button className="delete-button" onClick={() => deleteTrick(id)}>X</button>
        </div>
    )
}

export default Tricks