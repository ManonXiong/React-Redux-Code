//Create an Action Creator, but this function is defined in a normal function's way.

export const selectSong = (song) => {
   //return an action: redux action returned is an object.
   //This object must have a 'type' property, in Capitals
   //payload is optional
   return {
       type: 'SONG_SELECTED',
       payload: song
   };
}; 

//Named export allows us to export many different functions from a single file.

//For 'payload: song', the "song" here is the same as {song:song}. 
//The key and value are in the same name. 
//The value 'song' is the param passed in this function.
//payload: {song} --this syntax will create an object outside of an object.
//'song' itself is an object with properties 'title' and 'duration'.