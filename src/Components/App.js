import React, { Component } from 'react'
import '../App.css'
import Card from './Card'
import headshot from '../self.jpg'
import sunset from '../sunset.jpg'



class App extends Component {
  constructor() {
    super()
    this.state = {
      headline: 'Learning React? Start Small.',
      name: 'Ayako Matsuda',
      message: "Can't pry yourself away from tutorials? The cure is to make tiny little experiment apps.",
      url: 'http://anoninc.net/about/',
      link: 'anoninc.net',

    }
  }

  render() {
    return (
      <div className="App">
        <Card
          logoURL={sunset}
          headline={this.state.headline}
          name={this.state.name}
          creditImageURL={headshot}
          message={this.state.message}
          url={this.state.url}
          link={this.state.link}
        />
      </div>
    )
  }
}

export default App
