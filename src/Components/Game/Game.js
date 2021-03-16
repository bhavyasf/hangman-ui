import React, { Component } from 'react';
import { Input, Button, Container } from '@material-ui/core';
import HangmanBar from '../HangmanBar';
import DialogBox  from '../Dialog/Dialog';

const styles = {
    Input: {
        fontSize: '50px',
        width: '45px',
        border: '1px solid #808080',
        backgroundColor: '#fdf5e2',
        textAlign: 'center',
        color: '#000000'
    },
    div: {
        margin: 'auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'inherit',
    },
    optionsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        marginBottom: '10px',
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    guessLetterField: {
        fontSize: '30px',
        width: '40px',
        marginLeft: '10px'
    },
    submitLetterButton: {
        marginLeft: '10px',
    },
    completeWordInput: {
        marginRight: '10px'
    },
    guessHeader: {
        textAlign: 'center',
    },
    errorMessage: {
        textAlign: 'center',
    }
};


class Game extends Component {
    constructor(props) {
        super(props);
        const { localStorage } = window;
        const gameId = localStorage.getItem('game-id');
        console.log('GAME ID IN CONSTRUCTOR', gameId);
        if (!gameId) {
            props.fetchGuessWord();
        } else {
            console.log('GAME ID IN FETCHING', gameId);
            props.fetchGameDetailsById(gameId);
        }
    }
    
    onCompleteWordClicked() {
        const completeWordInputElement = document.getElementById('complete-word-input');
        if (!completeWordInputElement.value) return;
        const { id, submitWord } = this.props;
        if (!id) return;
        submitWord(id, completeWordInputElement.value); 
    }
    onSubmitLetterClicked() {
        const guessLetterInputElement = document.getElementById('guess-letter-input');
        if (!guessLetterInputElement.value) return;
        const { submitLetter, id } = this.props;
        if (!id) return;
        submitLetter(id, guessLetterInputElement.value);
    }
    render() {
        const { randomWord, id, guessesLeft, errorMessage, hasWon } = this.props;
        const randomWordArray = randomWord ? randomWord.split('') : [];
        return (
            <div>
                <HangmanBar />
                <Container className="card-game" id="card-game" style={styles.container}>
                    <div className="card-game-title" style={styles.div}>
                        <h3 id="gameTitle">GUESS THE WORD</h3>
                    </div>
                    <div className="card-game-text-fields" style={styles.div}>
                        {randomWordArray.map((letter, index) => {
                            return (<Input inputProps={{ style: styles.Input, maxLength: 1 }} key={index} disabled id={`input-${index}`} value={letter.toUpperCase()} />);
                        })}
                    </div>
                    <div style={styles.optionsContainer}>
                        <h3>Guess letter: </h3><Input style={styles.guessLetterField} color="secondary" inputProps={{ maxLength: 1 }} id="guess-letter-input" />
                        <Button color="primary" variant="contained" style={styles.submitLetterButton} onClick={() => this.onSubmitLetterClicked()} >Submit Letter</Button>
                    </div>
                    <div style={styles.optionsContainer}>
                        <Input style={styles.completeWordInput} id="complete-word-input" />
                        <Button color="secondary" variant="contained" onClick={() => { this.onCompleteWordClicked() }}>Submit complete word here </Button>
                    </div>
                    <div style={styles.infoContainer}>
                       <h5 style={styles.guessHeader}>Guesses Left: { guessesLeft }</h5>
                       <p style={styles.errorMessage}>{ errorMessage }</p>
                    </div>
                </Container>
                <DialogBox 
                open={hasWon || !guessesLeft } 
                message={ !hasWon ? errorMessage : '' } 
                title={hasWon ? 'You Won!' :  (!guessesLeft ? 'Sorry, you Lost' : '')}
                buttonMessage="Return to Home Page" 
                endGame={hasWon || !guessesLeft }
                gameId={id}
                />
            </div>
        );
    }
}

export default Game;

