import {combineReducers} from 'redux';


const letterReducer = () => {
    return {title: "title from DB", context: "context from DB ...."};
};

const previewLetterReducer = (previewLetter=null, action) => {
    if(action.type === "PREVIEW_LETTER"){
        return action.payload;
    }
    if(action.type === "CANCEL_LETTER"){
        return action.payload;
    }
    return previewLetter;
};

export default combineReducers({
    letter: letterReducer,
    previewLetter: previewLetterReducer, 
})
