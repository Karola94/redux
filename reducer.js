import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            })
        default:
            return state;
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                ...//wpisz tu coś
            });
        default:
            return state;
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                ...//wpisz tu coś
            });
        default:
            return state;
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                ...//wpisz tu coś
            });
        default:
            return state;
    
}

const initialState = {
    comments: [],
    users: []
};