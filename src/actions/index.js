//list actions
//submit guess
//restart
//click info

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess =(guess)=> {
    return {
        type: SUBMIT_GUESS,
        guess
        //maybe??
    }
}
export const RESTART = 'RESTART';
export const restart = ()=> {
    return {
        type: RESTART
        //click
    }
}
export const GET_INFO = 'GET_INFO';
export const getInfo = () =>{
    return {
        type: GET_INFO
    }
}
