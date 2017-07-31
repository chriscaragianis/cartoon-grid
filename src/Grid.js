import React from 'react/react';
import Cell from './Cell';
import './Grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
 }
  render() {
    const {height, width} = this.state;
    const style = {};
    if (height / width > 0.62) {
      style.width = '100%';
      style.height = `${0.62 * width}px`;
    } else {
      style.height = '100vh';
      style.width = `${1.62 * height}px`;
    }
    const cells = [];
    for (var i = 0; i < this.props.cells; i++) {
      if (i % 3 == 0) {
        cells.push(<Cell color="green" />)
      }
      if (i % 3 == 1) {
        cells.push(<Cell color="orange" />)
      }
      if (i % 3 == 2) {
        cells.push(<Cell color="pink" />)
      }
    }
    return (
      <div className="grid-container">
        <div className="grid" style={style}>
          {cells}
        </div>
      </div>
    )
  }
}

export default Grid;
