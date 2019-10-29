import React, { Component } from 'react';
import BojackQuotes from './bojack-quotes.json';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Quote extends Component {
  state = { 
    displayedQuote: null,
    quotes: [],
    retweetAnchorTag: null
  }

  componentDidMount() {
    this.setState({
      quotes: BojackQuotes.quotes
    },
    this.getNewQuote
    );
  }

  getNewQuote() {
    const randomQuote = this.state.quotes[this.randomIndex(this.state.quotes)]
    const quote = this.displayQuote(randomQuote)
    const anchorTag = this.displayRetweet(randomQuote)
    this.setState({
      displayedQuote: quote,
      retweetAnchorTag: anchorTag
    })
  }

  displayQuote(quote) {
    return (
      <h1
        style={{
          marginTop: '5px'
        }}
      >
        <blockquote
          style={{
            fontSize: '18px',
            margin: '1em'
          }}
        >
          {quote.text}
        </blockquote>
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
  }

  displayRetweet(quote){
    return (
      <a
        href={"https://twitter.com/intent/tweet?text="+ encodeURIComponent(quote.text + " --" + quote.author)}
        id="tweet-quote"
        >
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    )
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
              {this.state.retweetAnchorTag}
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

export default Quote;