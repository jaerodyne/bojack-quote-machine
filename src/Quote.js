import React, { Component } from 'react';
import BojackQuotes from './bojack-quotes.json';

class Quote extends Component {
  state = { quotes: [] }

  componentDidMount() {
    let quotes = BojackQuotes.quotes.map((quote, index) => {
      return (
        <li key={index}>
          {quote.quote}
          <span id="author">
            -- {quote.author}
          </span>
        </li>
      )
    })
    this.setState({quotes});
  }

  render() {
    return(
      <div id="quote-box">
        <h1 id="text">
          {this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]}
        </h1>
        <button id="new-quote">New Quote</button>
        <a href="tweet-quote" id="tweet-quote">Tweeter</a>
      </div>
    )
  }
}

export default Quote;