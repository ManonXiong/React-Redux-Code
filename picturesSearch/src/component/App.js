import React from 'react';
import unsplash from './API/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images:[] } //data from the API response will be stored here
    
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        });

        this.setState({images: response.data.results});
    }

    render() {
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar handleSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>)
    }
}

export default App;

//Notes:

//<SearchBar handleSearchSubmit={this.onSearchSubmit} />
//The handleSearchSubmit is a self-defined property (props) for child component SearchBar.
//Remind: passing a callback function to props, don't invoke it with ().

//React is responsible for showing HTML to users / to front-end. It's not for dealing with HTTP requests. That's when Axios comes in.
//axios is a AJAX client, sending requests and getting back the data.
//Axios: Promise based HTTP client for the browser and node.js

//for axios GET method:
//axios.get('/user?ID=12345') is the same as 
//axios.get('/user', {
// params: {
//     ID: 12345
//   }
// }) --this is string query parameter

//To access API:
//axios.get('path to get the result', {config information, including Access Key}

//axios.get() will return a promise giving a little notification that the request is completed.
//Promise is an object.
//promise.then(funcName1) -- funcName1 is a callback function. It's invoked when a promiese is returned. We can use it everytime we are dealing with async requests and promise.
//The response (data) sent back are often in an array of objects. Here, an object is a distinct picture.

//We can authorize the data using headers.
//headers: {
//  Authorization: "Client-ID 
//  6566c36588f255fc19e1d91e7eb88156ca50c9d8086297e8abbdc8949ce563f2" }

//Remind: headers itself is an item in the config object, accompanying the params object. So remember to add "," behind params object.

//For the code in "Fetch data from Unsplash API":
//1.use arrow functions, because this is a callback function
//2.handlle the requests using async await
//3.create a custom axios client in another file, with baseURL and authentication key