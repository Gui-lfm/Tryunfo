import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const { cardDeck } = this.props;

    return (
      <>
        <h2>Todas as Cartas</h2>
        {cardDeck.map((card) => <Card key={ card.cardName } { ...card } />)}
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
};

export default CardList;
