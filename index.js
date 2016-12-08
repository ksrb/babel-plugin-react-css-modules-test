import React from 'react';
import ReactDOM from 'react-dom';

import Nested from './nested';

import './index.css';

// Import html file into build
require('file?name=[name].[ext]!./index.html')

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName='test'>
        Hello
        <Nested />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
