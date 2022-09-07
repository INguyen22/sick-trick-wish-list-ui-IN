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
  componentDidMount = () => {
    this.fetchTricks()
  }
  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <TricksContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;