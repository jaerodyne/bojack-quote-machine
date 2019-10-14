import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter)

ReactDOM.render(<App />, document.getElementById('root'));