import React, { Component } from 'react';
import BojackQuotes from './bojack-quotes.json';
import { Button, Card } from 'react-bootstrap';

class Quote extends Component {
  state = { 
    quotes: [],
    displayedQuote: null
  }

  componentDidMount() {
    let quotes = BojackQuotes.quotes.map((quote) => {
      return (
        <h1
          style={{
            marginTop: '5px'
          }}
        >
          <p 
            style={{
              fontSize: '32px'
            }}
          >
            {quote.quote}
          </p>
          <p
            id="author"
            style={{
              fontSize: '24px',
              textAlign: 'right'
            }}
          >
            -- {quote.author}
          </p>
        </h1>
      )
    })
    const quote = quotes[this.randomIndex(quotes)]
    this.setState({
      quotes,
      displayedQuote: quote
    });
  }

  getNewQuote() {
    const quote = this.state.quotes[this.randomIndex(this.state.quotes)]
    this.setState({
      displayedQuote: quote
    })
  }

  randomIndex(quotes) {
    if (this.state.quotes) {
      return Math.floor(Math.random() * this.state.quotes.length)
    } else {
      return Math.floor(Math.random() * quotes.length)
    }
  }

  render() {
    return(
      <div className="row justify-content-center align-self-center">
        <Card
          className="mx-auto d-block fade-in"
          id="quote-box"
          style={{
            border: 'none',
            fontFamily: 'Lora, serif',
            margin: '15px',
            opacity: '0.8',
            padding: '15px',
            width: '800px'
          }}
        >
          <div id="text">
            {this.state.displayedQuote}
          </div>
          <hr />
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              margin: '15px',
              textAlign: 'center'
            }}
          >
            <Button onClick={() => this.getNewQuote()} id="new-quote">New Quote</Button>
            <a
              className="twitter-share-button"
              datasize="large"
              href={"https://twitter.com/intent/tweet?text="}
            >
              Tweet
            </a>
          </div>
        </Card>
      </div>
    )
  }
}

export default Quote;