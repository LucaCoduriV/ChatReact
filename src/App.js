import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  state = {
    message: ""
  }

  handleChatSubmit(event){

  }

  handleMessage(event){
    this.setState({message: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
        <div class="chat">
          <form onSubmit={event => this.handleChatSubmit(event)}>
            <label>Message:</label>
            <input onChange={event => this.handleMessage(event)}/>
          </form>
        </div>
    );
  }
}

export default App;
