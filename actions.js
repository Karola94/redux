import uuid from uuid;

//Obiekt aplikacji
var appObject = {
    type,
    id,
    text,
    thumbNumber
}

//Tworzenie komentarza
const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
    appObject.type = ADD_COMMENT;
    appObject.text = text;
    appObject.id = uuid.v4();
    return appObject;
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment('nowy komentarz!');

//Edycja komentarza
export const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text) {
    appObject.type = EDIT_COMMENT;
    appObject.text = text;
    appObject.id = uuid.v4();
    return appObject;   
}

const boundEditComment = text => dispatch(editComment(text));
boundEditComment('edytowany komentarz!');

//Usuwanie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    appObject.type = REMOVE_COMMENT;    
    appObject.id = id;
    return appObject;  
}

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(20);

//Ocenianie +1/-1 komentarza
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addThumb(id) {
    appObject.type = THUMB_UP_COMMENT;    
    appObject.id = id;
    appObject.thumbNumber +=1;
    return appObject;   
}
const boundAddThumb = id => dispatch(addThumb(id));
boundAddThumb(20);

function subThumb(id) {
    appObject.type = THUMB_DOWN_COMMENT;    
    appObject.id = id;
    appObject.thumbNumber -=1;
    return appObject;  
}
const boundSubThumb = id => dispatch(subThumb(id));
boundSubThumb(5);