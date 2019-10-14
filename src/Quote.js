import React, { Component } from 'react';
import BojackQuotes from './bojack-quotes.json';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              fontSize: '18px',
              margin: '1em'
            }}
          >
            {quote.text}
          </p>
          <p
            id="author"
            style={{
              fontSize: '24px',
              marginBottom: '1em',
              textAlign: 'right'
            }}
          >
            —{quote.author}
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
            margin: '2em',
            opacity: '0.8',
            padding: '2em',
            width: '800px'
          }}
        >
          <div
            className="text-center"
            style={{
              marginTop: '1em'
            }}
          >
            <img src={require('./bojack-horseman-logo.gif')} alt="Bojack Horseman"/>
          </div>
          <div id="text">
            {this.state.displayedQuote}
          </div>
          <hr />
          <div
            style={{
              fontFamily: 'Poppins, sans-serif',
              margin: '2em',
              textAlign: 'center'
            }}
          >
            <Button
              className="mr-2"
              onClick={() => this.getNewQuote()} id="new-quote">New Quote
            </Button>
            <Button>
              <a
                href={"https://twitter.com/intent/tweet?text="}
                id="tweet-quote"
                >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Quote;