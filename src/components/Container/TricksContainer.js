import React from "react";
import "./TricksContainer.css"
import Tricks from "../Tricks/Tricks";

const TricksContainer = ({tricks, deleteTrick}) => {
    const trickCard = tricks.map(trick => {
        const {id, name, obstacle, stance, tutorial } = trick
        return <Tricks key ={id} id={id} name={name} obstacle={obstacle} stance={stance} tutorial={tutorial} deleteTrick={deleteTrick}/>
    })
    return (
        <div className="trick-container">
            {trickCard}
        </div>
    )
}

export default TricksContainer