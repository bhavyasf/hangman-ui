import { connect } from 'react-redux';
import Game from './Game';
import { fetchGuessWord, guessLetter, fetchGuessWordById, guessWord } from '../../redux/actions/game';
import { isJSON } from '../../utils';

const mapStateToProps = (state) => {
    console.log(state.gameReducer.type);
    console.log(state.gameReducer.wordProgress);
    return {
        randomWord: state?.gameReducer?.wordProgress,
        id: state?.gameReducer?.id,
        newGame: state?.gameReducer?.newGame || false,
        guessesLeft: isJSON(state?.gameReducer?.errorMessage) ? JSON.parse(state?.gameReducer?.errorMessage).guesses : state.gameReducer.guesses,
        errorMessage: isJSON(state?.gameReducer?.errorMessage) ? JSON.parse(state?.gameReducer?.errorMessage).message : state?.gameReducer?.errorMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGuessWord: () => {
            dispatch(fetchGuessWord())
        },
        submitLetter: (id, letter) => {
            dispatch(guessLetter(id, letter))
        },
        fetchGameDetailsById: (id) => {
            dispatch(fetchGuessWordById(id))
        },
        submitWord: (id, word) => {
            dispatch(guessWord(id, word))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);