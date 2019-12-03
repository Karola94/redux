import uuid from 'uuid';

//Tworzenie komentarza
export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }    
}

//const boundAddComment = text => dispatch(addComment(text));
// boundAddComment('nowy komentarz!');

//Edycja komentarza
export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: uuid.v4()
    }      
}

//const boundEditComment = text => dispatch(editComment(text));
//boundEditComment('edytowany komentarz!');

//Usuwanie komentarza
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,    
        id: id
    }
          
}

//const boundRemoveComment = id => dispatch(removeComment(id));
//boundRemoveComment(20);

//Ocenianie +1/-1 komentarza
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbUpComment(commentId) {
    return {
      type: THUMB_UP_COMMENT,
      id: commentId
    }
  }
//const boundAddThumb = id => dispatch(thumbUpComment(id));
//boundAddThumb(20);

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,  
        id: commentId        
    }         
}
//const boundSubThumb = id => dispatch(subThumb(id));
//boundSubThumb(5);