//This js file includes some rules of reducers in Redux Store Design.

export default (state=[], action) => {
    // Old way:
    // if(action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }
    // return state;
    switch(action.type) {
        case 'FETCH_POSTS':
          return action.payload;
        default:
          return state;
    }
}

// Rules of Reducers:
// 1.Return values except 'undefined'
// So, in intialization, we have to initialize the state as null or empty array/object
// 2.Produces 'state' or data to be used inside of youur app using only previous stte and the action
// The params passed in reducers are the old state and actions.
// 3.Must not return 'out of itself' to decide what value to reture (reducers are pure)
// CANNOT fetch API data or access DOM elements here. --these should be done in action creators.
// 4.Must not mutate its input 'state' argument
// WARNING: misleading rule
// Mutate the original state but don't store the new state back into the old state.
// For example: to add an element, don't use 'array1.push(value)'. In this way, array1 is mutated.
// You may check the logic of Redux from its source code.
// If state[key] is changed, haschange is assigned 'true' and a brand new state object is returned.
// If a new state object is not returned, Redux won't tell other parts of the app that the data changed.
// Remind: JavaScript check whether 2 arrays are the same by checking their memory location, not the content.

//switch statement:
//In an reducer, it's common to use 'switch' to handle all actions passed.

//Syntax 'export default const postsReducer...' -- wrong