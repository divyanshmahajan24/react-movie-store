import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.data.map((row, i) => {return <tr key={i}><td>{row.title}</td></tr>})}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
