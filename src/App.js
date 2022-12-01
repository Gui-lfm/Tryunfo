import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/app.css';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Tryunfo</p>
        <Form />
        <Card />
      </>
    );
  }
}

export default App;
