import React from 'react';

class Icon extends React.Component {
  constructor(dest) {
    this.props.link = dest;
  }

  render () {
    return (
      <div>
        <a href={this.props.link} target="_blank" className="icon">
          <img src={this.props.image} width="40" height="40" className="centreImage"/>
        </a>
      </div>
    )
  }
};

export default Icon;