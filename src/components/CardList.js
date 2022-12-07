import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const {
      cardDeck,
      deleteCard,
      nameFilter,
      rareFilter,
      trunfoFilter,
      onInputChange,
      onTrunfoCheck,
      isTrunfoFilterChecked,
    } = this.props;

    return (
      <>
        <h2>Todas as Cartas</h2>
        <section className="filterList">
          <p>filtros de busca</p>
          <input
            name="nameFilter"
            type="text"
            placeholder="filtrar por nome..."
            data-testid="name-filter"
            value={ nameFilter }
            onChange={ onInputChange }
            disabled={ isTrunfoFilterChecked }
          />
          <select
            name="rareFilter"
            data-testid="rare-filter"
            value={ rareFilter }
            onChange={ onInputChange }
            disabled={ isTrunfoFilterChecked }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label htmlFor="trunfo-filter">
            <input
              name="trunfoFilter"
              id="trunfo-filter"
              type="checkbox"
              data-testid="trunfo-filter"
              value={ trunfoFilter }
              onChange={ onTrunfoCheck }
            />
            Super Trunfo
          </label>
        </section>

        <section className="cardList">
          {cardDeck
            .filter((card) => card.cardName.includes(nameFilter))
            .filter((card) => card.cardRare === rareFilter || rareFilter === 'todas')
            .filter((card) => (trunfoFilter ? card.cardTrunfo : card))
            .map((card) => (
              <div key={ card.cardName }>
                <Card { ...card } />
                <button
                  name={ card.cardName }
                  type="button"
                  data-testid="delete-button"
                  onClick={ deleteCard }
                >
                  Excluir carta
                </button>
              </div>
            ))}
        </section>
      </>
    );
  }
}

CardList.propTypes = {
  cardDeck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardImage: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardRare: PropTypes.string,
      CardTrunfo: PropTypes.bool,
    }),
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTrunfoCheck: PropTypes.func.isRequired,
  isTrunfoFilterChecked: PropTypes.bool.isRequired,
};

export default CardList;
