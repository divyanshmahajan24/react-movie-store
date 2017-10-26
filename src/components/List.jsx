import React from 'react';

class List extends React.Component {
  // updates the component whenever props are updated
  componentWillReceiveProps(nextProps) {
    debugger
    this.props = nextProps;
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((row, i) => {return <li key={i}>{row[this.props.mapKey]}</li>})}
        </ul>
      </div>
    );
  }
}

export default List;
