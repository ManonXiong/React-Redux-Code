import { combineReducers } from "redux";

//Reducers: specify they are reducers in the function names
const songsReducer = () => {
    return [
        {title: 'Yesterday one more time', duration: '4:05'},
        {title: 'Roar', duration: '3:50'},
        {title: 'Love story', duration: '5:13'},
        {title: 'Coming home', duration: '3:32'},
        {title: 'On my way', duration: '4:25'}
    ]
}

//here, song is the state/data from Redux store, and action is the 'form' as in the analogy explanation.
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};


//Any other files in this object can access this set of reducers now.
export default combineReducers({
    //Keys of this object will show up as the keys in the Redux state object
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

//combineReducers returns state.
//They are similar to
//state = {...} in react class component.