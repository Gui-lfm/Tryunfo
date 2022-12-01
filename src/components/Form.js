import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>Adicione uma nova carta</h1>
        <label htmlFor="nome">
          Nome:
          <input id="nome" type="text" name="nome" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            id="attr1"
            type="number"
            name="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            id="attr2"
            type="number"
            name="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            id="attr3"
            type="number"
            name="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="img-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="img-input"
            id="img-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select data-testid="rare-input" name="rarity" id="rarity">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="s-trunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="s-trunfo"
            id="s-trunfo"
          />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
