import {SUBMIT_GUESS, RESTART, GET_INFO} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
    if(action.type === SUBMIT_GUESS){

    }
    else if(action.type === RESTART){

    }
    else if(action.type === GET_INFO){
        
    }
}