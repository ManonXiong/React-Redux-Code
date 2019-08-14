/* 
* action types
*/

export const ADD_TOO = "ADD_TO"
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* Other constants
*/

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

/*
* action creators
*/

export function addTodo(text) {
    return { type: ADD_TOO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

//Action is an object with a default property "type". Another property is self-defined.
//Actions only describe what happened, but don't describe how the application's state changes.