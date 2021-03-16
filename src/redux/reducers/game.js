import createReducer from 'redux-createreducer';
import {
    FETCH_GUESS_WORD,
    FETCH_GUESS_WORD_SUCCESS,
    ERROR,
    GUESS_LETTER,
    GUESS_WORD,
} from '../actions/game';

const actionHandlers = {
    [FETCH_GUESS_WORD]: () => ({
        hasWon: false,
        guesses: 5,
    }),
    [FETCH_GUESS_WORD_SUCCESS]: (state, fetchWordSuccess) => ({
        ...state,
        ...fetchWordSuccess,
    }),
    [ERROR]: (state, errorMessage) => ({
        ...state,
        ...errorMessage,
    }),
    [GUESS_LETTER]: (state) => ({
        ...state,
    }),
    [GUESS_WORD]: (state) => ({
        ...state,
    }),
}

export default createReducer({}, actionHandlers);