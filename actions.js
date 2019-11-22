import uuid from uuid;

//Tworzenie komentarza
const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT; 
    text: 'My first comment !'
}
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment('nowy komentarz!');

//Edycja komentarza
const EDIT_COMMENT = 'EDIT_COMMENT';

{
    type: EDIT_COMMENT;
    id: 20;
    text: 'wyedytowany tekst komentarza'
}
function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

const boundEditComment = text => dispatch(editComment(text));
boundEditComment('edytowany komentarz!');

//Usuwanie komentarza
const REMOVE_COMMENT = 'REMOVE_COMMENT';
{
    type: REMOVE_COMMENT;
    id: 20 // przykładowy id komentarza do usunięcia
}
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment(20);

//Ocenianie +1/-1 komentarza
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: THUMB_UP_COMMENT;
    id: 20;
    thumbNumber: 4
}
{
    type: THUMB_DOWN_COMMENT;
    id: 5;
    thumbNumber: 8
}
function addThumb(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4(),
        thumbNumber: 4
    }
}
const boundAddThumb = id => dispatch(addThumb(id));
boundAddThumb(20);

function subThumb(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4(),
        thumbNumber: 8
    }
}
const boundSubThumb = id => dispatch(subThumb(id));
boundSubThumb(5);