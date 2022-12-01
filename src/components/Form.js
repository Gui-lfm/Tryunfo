import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Adicione uma nova carta</h1>
        <label htmlFor="nome">
          Nome:
          <input id="nome" type="text" data-testid="name-input" />
        </label>
      </form>
    );
  }
}

export default Form;
