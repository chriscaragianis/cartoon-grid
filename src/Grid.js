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
    const cellStyle = {};
    if (height / width > 0.62) {
      style.width = '100%';
      style.height = `${0.62 * width}px`;
    } else {
      style.height = '100vh';
      style.width = `${1.62 * height}px`;
    }
    if (height > width) {
      style.height = `${12 * 0.621 * width}px`;
      style.flexWrap = "no-wrap";
      style.flexDirection = 'column';
      cellStyle.height = `${0.62 * width}px`;
      cellStyle.width = '100%';
    }
    const cells = [];
    for (var i = 0; i < this.props.cells; i++) {
      if (i % 3 == 0) {
        cells.push(<Cell color="green" style={ cellStyle } />)
      }
      if (i % 3 == 1) {
        cells.push(<Cell color="orange" style={ cellStyle } />)
      }
      if (i % 3 == 2) {
        cells.push(<Cell color="pink" style={ cellStyle } />)
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
