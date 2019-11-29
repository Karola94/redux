import uuid from uuid;

//Tworzenie komentarza
const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }    
}

const boundAddComment = text => dispatch(addComment(text));
// boundAddComment('nowy komentarz!');

//Edycja komentarza
export const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text) {
    return {
        type = EDIT_COMMENT,
        text = text,
        id = uuid.v4()
    }      
}

const boundEditComment = text => dispatch(editComment(text));
//boundEditComment('edytowany komentarz!');

//Usuwanie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    return {
        type = REMOVE_COMMENT,    
        id = id
    }
          
}

const boundRemoveComment = id => dispatch(removeComment(id));
//boundRemoveComment(20);

//Ocenianie +1/-1 komentarza
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addThumb(id, thumbNumber) {
    return {
        type = THUMB_UP_COMMENT,   
        id = id,
        thumbNumber = votes 
    }        
}
const boundAddThumb = id => dispatch(addThumb(id));
//boundAddThumb(20);

function subThumb(id, thumbNumber) {
    return {
        type = THUMB_DOWN_COMMENT,  
        id = id,
        thumbNumber = votes
    }         
}
const boundSubThumb = id => dispatch(subThumb(id));
//boundSubThumb(5);