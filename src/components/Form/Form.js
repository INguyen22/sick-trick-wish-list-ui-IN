import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            trickName: '',
            obstacle: '',
            tutorial: ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }
    render() {
        return (
        <form>
            <select 
                name="stance"
                value={this.state.stance}
                placeholder="Choose your stance"
                onChange={this.handleChange}
            >
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
            </select>
            <input 
                name="trickName"
                value={this.state.trickName}
                placeholder="Trick Name"
                onChange={this.handleChange}
            />
            <select 
                name="obstacle"
                value={this.state.obstacle}
                placeholder="Choose your stance"
                onChange={this.handleChange}
            >
                <option value="Flatground">Flatground</option>
                <option value="Ledge">Ledge</option>
                <option value="Rail">Rail</option>
                <option value="Stairs">Stairs</option>
                <option value="Pool">Pool</option>
                
            </select>
            <input 
                name="tutorial"
                value={this.state.tutorial}
                placeholder="Link to tutorial"
                onChange={this.handleChange}
            />
            <button>Send it!!!</button>
        </form>
        )
    }
}

export default Form 