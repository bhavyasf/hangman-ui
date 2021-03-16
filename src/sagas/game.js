import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
   FETCH_GUESS_WORD,
   FETCH_GUESS_WORD_BY_ID,
   GUESS_LETTER,
   GUESS_WORD,
   errorResult,
   fetchGuessWordSuccess,
} from '../redux/actions/game';
import { REACT_APP_API_BASE_URL } from '../env';

export function* fetchGuessWord() {
   try {
      const { data } = yield call(axios.post, `${REACT_APP_API_BASE_URL}games`);
      console.log(data);
      const { localStorage } = window;
      localStorage.setItem('game-id', data.id);
      yield put(fetchGuessWordSuccess(data));
   } catch (error) {
      const { response: { data : { error: { message } = {} } = {} } = {} } = error;
      yield put(errorResult(message));
   }
}

export function* submitLetter({ id, letter }) {
   try {
      const { data } = yield call(axios.patch, `${REACT_APP_API_BASE_URL}games/${id}/letters/${letter}`);
      console.log(data);
      yield put(fetchGuessWordSuccess(data));
   } catch (error) {
      const { response: { data : { error: { message } = {} } = {} } = {} } = error;
      yield put(errorResult(message));
   }
}

export function* fetchGuessWordById({ id }) {
   try {
      const { data } = yield call(axios.get, `${REACT_APP_API_BASE_URL}games/${id}`, { params: { hasWon: false } });
      yield put(fetchGuessWordSuccess(data));
   } catch (error) {
      const { response: { data : { error: { message } = {} } = {} } = {} } = error;
      yield put(errorResult(message));
   }
}

export function* submitWord({ id, word }) {
   try  {
     const { data } = yield call(axios.patch, `${REACT_APP_API_BASE_URL}games/${id}/words/${word}`);
     console.log(data);
     yield put(fetchGuessWordSuccess(data));
   } catch (error) {
      const { response: { data : { error: { message } = {} } = {} } = {} } = error;
      yield put(errorResult(message));
   }
}

export default function* () {
   yield takeLatest(FETCH_GUESS_WORD, fetchGuessWord);
   yield takeLatest(GUESS_LETTER, submitLetter);
   yield takeLatest(FETCH_GUESS_WORD_BY_ID, fetchGuessWordById);
   yield takeLatest(GUESS_WORD, submitWord);
}