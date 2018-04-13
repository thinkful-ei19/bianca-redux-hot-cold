//list actions
//submit guess
//restart
//click i

export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess =(guess)=> {
    return {
        type: SUBMIT_GUESS,
        guess
        //maybe??
    }
}
export const RESTART = 'RESTART';
export const restart = (guess)=> {
    return {
        type: RESTART,
        guess
    }
}
export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = () =>{
    return {
        type: AURAL_UPDATE,
        
    }
}
