import React from 'react/react';
import './Grid.css';
class Cell extends React.Component {
  render() {
    const style = this.props.style;
    style.backgroundColor = this.props.color;
    return (
      <div className="cell" style={ style }>
        hello
      </div>
    )
  }
}

export default Cell;

