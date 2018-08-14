
const initializeState = {
    comments: [],
    users: []
}

import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import  {EDIT_COMMENT} from './actions'
import  {THUMB_UP_COMMENT} from './actions'
import  {THUMB_DOWN_COMMENT}from './actions'
import {comments} from './comments'
import { combineReducers } from 'redux';


function reducer(state = initializeState, action){
    switch(action.type){
       
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(element => {
                    if(element.id === action.id){
                        {
                         element.text = action.text;
                        }
                    }
                })
            } 
        )
        
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(element => {
                    if(element.id === action.id){
                        {
                         element.countUp += 1;
                        }
                    }
                })
            })
         
            case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.forEach(element => {
                    if(element.id === action.id){
                        {
                         element.countDown += 1;
                        }
                    }
                })
            })    
       
       
        default:
                return state;
    }
};




