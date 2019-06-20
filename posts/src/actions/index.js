//Import the jsonplaceholder axios instance to the action creator file.
import jsonplaceholder from "../apis/jsonplaceholder";

//For more notes about fetching data in Redux, see Point 1 below.
export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch( {
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

//Notes:
//Point 1: wrong code
// export const fetchPosts = async () => {
//     const response = await jsonplaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// }
//This block of code seems to return an object with 'type' and 'payload' keys. IT'S NOT.
//In Babel, you can tell the 'return' is a switch statement: 
//Case0 is to return the request object; case 2 is to return the object.
//So the first time this action creator is invoked, a request object is returned, not our action.
//Error: Actions must be plain objects. --occurs, it doesn't return plain objects.
//recap: jsonplaceholder.get('/posts') is a promise. Withouth async-await, we don't get data, but a promise.

//Point 2: Redux Cycle
//If a middleware is applied, the cycle is: Action Creator -> Actions -> Dispatch -> Middleware -> Reducer -> State
//From calling an action creator to be dispatched in a reducer, just a millisecond is consumed.
//So even dropping 'async..await' syntax, the error message disappeared, but it's not what we want. We get no data.

//Point 3: Middleware
//Middleware is a function that gets called with every action we dispatch
//It has the ability to STOP, MODIFY, or otherwise mess around with actions
//Tons of open source middleware exist. One popular use of middleware is for dealing with async actions

//Point 4: What does Redux-Thunk do?
//Rules of Thunk: action creators can return either action objects or functions.
//If a function is returned, Thunk will invoke that function automatically. --> with Thunk, action creator can return a function
//Thunk accepts something from the dispatch and decides what to do: actions? pass to reduers: invoke this function
//If it's a function, Thunk pass 'dispatch' and 'getState' s params to this returned function.
//Wait the request returned from API, and we can dispatch action MANUALLY. A new action is returned and thrown to Dispatch.
//Dispatch passses this new action to Thunk, and Thunk(middleware) checks again.
