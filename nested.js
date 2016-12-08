import React from 'react';

import './index.scss';

class Nested extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='test'>
        Nested
      </div>
    );
  }

}

export default Nested;
