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

export const fetchUser = id => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()); //dispatch the result of calling 'fetchPosts'; 
    //await is to make sure nothign is going on until posts' data are returned
    
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    //userId here is a string, remember to use " "
    //_.uniq is to find the unique items and put in the array

    userIds.forEach(id => dispatch(fetchUser(id)));//remember to pass 'id' when invoking the action
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

//Point 2:
//Action creator 'fetchUser' overfetches the data repetively. We have to solve this overfetching problem.
//Method 1: one time memoization
//Code:
// export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data})
// })
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

//Method 2 is what we are using now.

//Point 3: about method2
//The logic here is: we don't change fetchUser and fetchPosts actions. They are small and compatible and resuable.
//We put action creators(fetchPosts, fetchUser) into a new action reator, and use that new action creator.
//fetchPostsAndUsers is:
//1)call fetchPosts first
//2)get the userId from the post
//3)elicit the unique userId's and put in a new array
//4)fetch user's data of the unique id's in that new array using fetchUser action

//Point 4:
//When put action creators into action creators, use another 'async...await'
//But we don't use 'await dispatch(fetchUser())' but use 'dispatch(fetchUser())'
//because there's nothing to do after user's data is fetched
//There's something the program has to do after fetch the posts, so we add 'await' in front of 'dispatch(fetchPosts())'.
//Though the 2 small actions have keyword 'dispatch', we use another dipatch when invoking them in the big action
//to make sure the data are dispatched correctly into the store.

//Point 5:
//Modify Method 2 to make it more concise:
//Code:
// _.chain(getState().posts)
//   .map('userId')
//   .uniq()
//   .forEach(id => dispatch(fetchUser(id)))
//   .value()
//Remember to use '.value()' to make the chain works

//Point 6:
//console.log(getState().posts); --getState is a function