import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  // updates the component whenever props are updated
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((row, i) => {return <li key={i}>{row[this.props.mapKey]}</li>})}
        </ul>
      </div>
    );
  }
}

export default List;
