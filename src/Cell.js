import React from 'react/react';
import './Grid.css';
class Cell extends React.Component {
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.props.color}}>
        hello
      </div>
    )
  }
}

export default Cell;

