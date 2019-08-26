/* 
* Reducers
*/
import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../reducers';
const { SHOW_ALL } = VisibilityFilters

function visibilityFilterReducer(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
//state here is an object

// This reducer is to hold the list of todos
function todosReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: true //when an to-do is created first, definitely "completed:false"
                }// completed is not 'payload' of any action
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                //index is the default index of each item in array, the second action.index is the index from action
                if (index === action.index) {
                    return {
                        ...todo,
                        completed: true
                    }// todo here is an object in the array(state), todo = {text:"", completed: false}
                }
                return todo
            })
        default:
            return state
    }
}
//state here is an array holding all to-to items.

const todoApp = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
})

export default todoApp

//If use 'export default combineReducers({...})', the two reducers above should be separated into 2 files, and use 'export default'

//Reducers specify how the application's state changes in response to actons sent to the store.
//All the application state is stored as a single object in Redux, so think of the state shape in advance.
//Think: in this big object, what data(states) are needed. In these states, what sepcific keys/values or arrays, strings are stored.
 