export const FETCH_GUESS_WORD = 'FETCH_GUESS_WORD';
export const GUESS_LETTER = 'GUESS_LETTER';
export const GUESS_WORD = 'GUESS_WORD';
export const FETCH_GUESS_WORD_SUCCESS = 'FETCH_GUESS_WORD_SUCCESS';
export const ERROR = 'ERROR';
export const FETCH_GUESS_WORD_BY_ID = 'FETCH_GUESS_WORD_BY_ID';

export const fetchGuessWord = () => ({
    type: FETCH_GUESS_WORD,
});

export const fetchGuessWordSuccess = (fetchResults) => ({
    type: FETCH_GUESS_WORD_SUCCESS,
    ...fetchResults,
});

export const fetchGuessWordById = (id) => ({
   type: FETCH_GUESS_WORD_BY_ID,
   id,   
});

export const errorResult = (errorMessage) => ({
     type: ERROR,
     errorMessage,
});

export const guessLetter = (id, letter) => ({
    type: GUESS_LETTER,
    letter,
    id,
});

export const guessWord = (id, word) => ({
    type: GUESS_WORD,
    word,
    id,
});
