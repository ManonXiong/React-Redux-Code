import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if(!props.songSelected) {
        return <div>Please select a song from the list.</div>
    }

    return(
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {props.songSelected.title}
        <br />
          Duration: {props.songSelected.duration}</p>
      </div>
    )
}

const MapStateToProps = state => {
    return {songSelected: state.selectedSong}
}

export default connect(MapStateToProps)(SongDetail);

//Here, we don't need to use the action creator to change the data.
//So no need to pass an action to 'connect'.
//And because this is a functional component, don't use 'this.props', but 'props' only.

//For simplicity, the param passed in can be
//const SongDetail = ({songSelected}) => {...}
//Then write 'if(!songSelected)', not 'if(!props.songSelected)'

//Conditonal Rendering 'if(...)'
//We use this to avoide the error -- TypeError: Cannot read property 'title' of null
//This error occurs because when this component is first rendered, we don't select any song.
//Then songSelected = null, and this error occurs.