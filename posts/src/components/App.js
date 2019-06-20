import React from 'react';
import PostList from './PostList';

const App = () => {
      return( 
        <div className="ui container">
          <PostList />
        </div>
      )
    }

export default App;

//In Redux App, we won't fetch data in React side. An action creator is created for fetching data.
//The data fetched are stored in Redux store. 
//And App component is just a component for containing different sub-components to render.
//App itself, does nothing.
//So the fetching-data action creator should be imported to the sub-component responsible for rendering data.
