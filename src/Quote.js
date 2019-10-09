import React, { Component } from 'react';
import BojackQuotes from './bojack-quotes.json';

class Quote extends Component {
  state = { quotes: [] }

  componentDidMount() {
    let quotes = BojackQuotes.quotes.map((quote, index) => {
      return (
        <li key={index}>
          {quote.quote} {quote.author}
        </li>
      )
    })
    this.setState({quotes});
  }

  render() {
    return(
      <div>
        {this.state.quotes}
      </div>
    )
  }
}

export default Quote;