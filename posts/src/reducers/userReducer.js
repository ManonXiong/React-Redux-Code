//Think and design what data (a user, or users) to be stored.
export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_USER':
          return [...state, action.payload];
        default:
          return state;
    }
}


//WRONG:
// export default (state='', action) => {
//     switch(action.type) {
//         case 'FETCH_USER':
//           return action.payload;
//         default:
//           return state;
//     }
// }
//This one: because only one user's data will be stored in the state, user with userId=1 will be stored.
//So that every blog has the same author. 
//When we fetch user data, we fetch one user per time, but we store all users into the state.

//In order to return a new state object (rules of reducers), syntax: 'return [...state, action.payload]'
//This syntax gets a new array returned.