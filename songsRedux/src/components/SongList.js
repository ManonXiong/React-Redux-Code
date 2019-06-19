import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

//In order to get data of Song List, now we have to connect Redux Store.
//We need a 'connect' function to connect Redux store and React component.
class SongList extends Component {
    returnList = () => {
      return this.props.songs.map((song) => {
        return(
          <div className='item' key={song.title}>
            <div className='right floated content'>
              <button className='ui button secondary'
               onClick={() => this.props.selectSong(song)} >
                Select
              </button>
            </div>
            <div className='content'>{song.title}</div>
          </div>
        );
      });
    }

    render() {
      return <div className='ui divided list'>{this.returnList()}</div>
    }//invoke this renderList function in jsx
}

const MapStateToProps = state => {
    console.log(state);
    return {
        songs: state.songs
    };// an array of songs' objects is return as the value of a key 'song'
}

export default connect(MapStateToProps, { selectSong })(SongList)

//Notes:
//connect function has functions as params passed in and returns functions.
//Second () is to invoke the function returned by 'connect'.

//In MapStateToProps, if we are not sure what's in the state object, we can use console.log to check.
//console.log(state); -- return 'state' object with 2 properties.
//The 2 properties/keys are defined in Reducers using combineReducers().

//In SongList render function, check the props returned from MapStateToProps.
//console.log(this.props);
//In this.props, you can see 'dispatch' function.

//The connect component connect Redux state/data and actions, passing them to the React component as props

//Cleaner code:
//export default connect(MapStateToProps, { selectSong })(SongList)
//export default connect(MapStateToProps, {selectSong: seletSong})(SongList)
//Because here, selectSong returns an object type, it's not a function,
//Syntax: <button onClilck={this.selectSong}>...</button> is WRONG.