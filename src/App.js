import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import './style/app.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardDeck: [],
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    isTrunfoFilterChecked: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validateSaveButton);
  };

  onTrunfoCheck = ({ target }) => {
    const { checked } = target;
    this.setState({
      trunfoFilter: checked,
      isTrunfoFilterChecked: checked,
    });
  };

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const validations = {
      maxValue: 210,
      minTxtLength: 4,
      minAttr: 0,
      maxAttr: 90,
    };
    // valida se o valor dos atributos estão entre o menor e maior valor possível
    const attrValue = Number(cardAttr1) >= validations.minAttr
      && Number(cardAttr1) <= validations.maxAttr
      && Number(cardAttr2) >= validations.minAttr
      && Number(cardAttr2) <= validations.maxAttr
      && Number(cardAttr3) >= validations.minAttr
      && Number(cardAttr3) <= validations.maxAttr;

    // valida se a somatória dos atributos não extrapola o maior valor estabelecido
    const maxSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
      <= validations.maxValue;

    // valida se os campos estão vazios e possuem um tamanho mínimo
    const isFieldEmpty = cardName.length >= validations.minTxtLength
      && cardDescription.length >= validations.minTxtLength
      && cardImage.length >= validations.minTxtLength
      && cardRare.length >= validations.minTxtLength;

    this.setState({
      isSaveButtonDisabled: !(isFieldEmpty && maxSum && attrValue),
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState((prev) => ({
      cardDeck: [...prev.cardDeck, newCard],
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cardRare: 'normal',
    }));
  };

  deleteCard = (event) => {
    event.preventDefault();
    const { cardDeck } = this.state;
    const { name } = event.target;

    this.setState({
      cardDeck: cardDeck.filter((card) => card.cardName !== name),
    });

    if (cardDeck.some((card) => card.cardTrunfo === true)) {
      this.setState({
        cardTrunfo: false,
        hasTrunfo: false,
      });
    }
  };

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardDeck,
      nameFilter,
      rareFilter,
      trunfoFilter,
      isTrunfoFilterChecked,
    } = this.state;

    return (
      <>
        <main>
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
        <section>
          <CardList
            cardDeck={ cardDeck }
            onInputChange={ this.onInputChange }
            onTrunfoCheck={ this.onTrunfoCheck }
            deleteCard={ this.deleteCard }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            isTrunfoFilterChecked={ isTrunfoFilterChecked }
          />
        </section>
      </>
    );
  }
}

export default App;
