import { combineReducers } from 'redux';

//If there are more and more reducers, we need to separate them to different fiels, and import here.
export default combinReducerss({})


//Notes:
//1.dummy reducers: Before we know what reducers/data we want to put in or store, use dummy ones.
//This can prevent erro messages.
//The dummy reducers are not key-value pairs of objects. They are 'key: reducer function'.
//dummy: 'dlfkajdf' --wrong
//dummy: () => 'ldfkjldf' --right
//Code for dummy reducer:
// export default combineReducers({
//     dummy: () => 'dlfkjad;f',
// })