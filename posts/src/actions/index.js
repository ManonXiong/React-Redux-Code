//Import the jsonplaceholder axios instance to the action creator file.
import jsonplaceholder from "../apis/jsonplaceholder";
import _ from 'lodash';

//For more notes about fetching data in Redux, see Point 1 below.
export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');

    dispatch( {
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

// export const fetchUser = id => async dispatch => {
//     const response = await jsonplaceholder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// }

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

//Action creator 'fetchUser' overfetches the data repetively. We have to solve this overfetching problem.
//Method 1: one time memoization
//Code:
export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data})
})
//Put a underscore "_" in front of the function name -- a private method
//Use momoize function from lodash. This function will memorize the function passed after the inner function's invoked.
//e.g. const memoizeGetUser = _.memoize(getUser);
//memoizeGetUser(2); -- call it. 1st time: it fetch data from API. 2nd time: no log in network request
//The getUser function has been memorized. 
//It will refetch data from network only a different argument is passed, e.g. memoizeGetUser(2)
//Steps:
//1)move the original 'fetchUser' action's inner code to private method.
//2)'id' and 'dispatch' should be passed as arguments. So, pass them to _.memoize(); and _fetchUser() in fetchUser;
//3)await is in the private method, async should be moved to the private method, too.
