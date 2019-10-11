/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';

/* Styles imports */
import './App.css';


/* Component imports */
import Post from '../Post/Post';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      toto: ""
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({toto: result.messageIp});
      },
      (error) => {

      }
    )
  }

  render() {
    return (
      <div>
        <h1 class="title">Hello world</h1>

        <div className="container">
          <Post text="uyguyegfuyeg" author="Guillaume" date="09/10/2019" />
          <p>{this.state.toto}</p>
        </div> 

      </div>
    );
  }
}

export default App;
