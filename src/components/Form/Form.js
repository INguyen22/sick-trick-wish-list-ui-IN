import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick)
        this.clearInput()
    }
    clearInput = () => {
        this.setState({
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        })
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <select 
                name="stance"
                value={this.state.stance}
                placeholder="Choose your stance"
                onChange={this.handleChange}
            >
                <option disabled value="">Choose your stance</option>
                <option value="Regular">Regular</option>
                <option value="Switch">Switch</option>
            </select>
            <input 
                name="name"
                value={this.state.name}
                placeholder="Trick Name"
                onChange={this.handleChange}
            />
            <select 
                name="obstacle"
                value={this.state.obstacle}
                placeholder="Choose your stance"
                onChange={this.handleChange}
            >
                <option disabled value="">Obstacle</option>
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