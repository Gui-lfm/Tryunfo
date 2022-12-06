import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardDeck, deleteCard } = this.props;

    return (
      <>
        <h2>Todas as Cartas</h2>
        <section className="cardList">
          {cardDeck.map((card) => (
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
};

export default CardList;
