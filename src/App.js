// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {

  constructor(props){
    super()
    this.state = {moodPoints: 1}
  }

  increaseMood(e){
    if (this.state.moodPoints===10){
      this.setState({
        moodPoints: 1
      })
    }
    else {
      this.setState({
        moodPoints: this.state.moodPoints + 1
      })
    }
  }

  render () {

    // make sure to return some UI
    return (
      <div>
      <h1>Hello {this.props.name}!</h1>
      <h3>You are {this.props.age} years old</h3>
      <h3>You love {this.props.favourites}</h3>
      <p>On a scale of 1-10</p>
      <p>You this happy: {this.state.moodPoints}</p>
      <button onClick= {(e) => this.increaseMood(e)}>Cheer Up! </button>
      </div>
    )
  }
}

export default Hello
