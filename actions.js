import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';



function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}


function editComment(id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id,
     }
}


function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}


function thumbUpComment(id, up)  {
    return {
        type: THUMB_UP_DOWN_COMMENT,
        id: id,
        countUp: up
    }
}

function thumbDownComment(id, down)  {
    return {
        type: THUMB_UP_DOWN_COMMENT,
        id: id,
        countDown: down 
    }
}


