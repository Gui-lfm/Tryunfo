import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../style/form.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
    } = this.props;

    return (
      <form>
        <h1 className="h2">Adicione uma nova carta</h1>
        <label htmlFor="nome">
          Nome:
          <input
            className="form-control"
            id="nome"
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            className="form-control form-control-lg"
            id="descricao"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            className="form-control"
            id="attr1"
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            className="form-control"
            id="attr2"
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="form-label" htmlFor="attr3">
          Attr03
          <input
            className="form-control"
            id="attr3"
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="img-input">
          Imagem
          <input
            className="form-control"
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="img-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            className="form-select"
            data-testid="rare-input"
            name="cardRare"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          <span>Você já tem um Super Trunfo em seu baralho</span>
        ) : (
          <label className="form-check-label" htmlFor="s-trunfo">
            <input
              className="form-check-input"
              type="checkbox"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="s-trunfo"
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        )}
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
