import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import AwesomeComponent from './components/AwesomeComponent.jsx';
// import Nav from './components/Nav.jsx';
import { Link } from 'react-router-dom'
import Nav from './components/Nav.jsx';
import Main from './containers/Main.jsx'

const View = () => (
  <div>
    <Nav />
    <Main />
  </div>
)

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <View />
      </BrowserRouter>
    )
  }
}

render(<App/>, document.getElementById('app'));
