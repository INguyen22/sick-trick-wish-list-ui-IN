import { Component } from 'react';
import './App.css';
import TricksContainer from '../Container/TricksContainer';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }
  fetchTricks = () => {
    fetch("http://localhost:3001/api/v1/tricks")
    .then(res => res.json())
    .then(data => {
      console.log('data', data)
      this.setState({tricks: data})
    })
  }
  addTrickPost = (newTrick) => {
    fetch("http://localhost:3001/api/v1/tricks", {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ 
            stance: newTrick.stance, 
            name: newTrick.name,
            obstacle: newTrick.obstacle,
            tutorial: newTrick.tutorial
        })
    })
    .then(res => res.json())
}
  componentDidMount = () => {
    this.fetchTricks()
  }
  addTrick = (newTrick) => {
    this.setState({tricks: [...this.state.tricks, newTrick]})
    console.log('updated state?', this.state.tricks)
    console.log('new trick', newTrick)
    this.addTrickPost(newTrick)
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick}/>
        <TricksContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;