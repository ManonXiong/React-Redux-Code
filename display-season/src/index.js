import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { 
    lat: null,
    errorMessage:''
  }; //state is an object containing data relevant to a component
  //but this.state itself is a property of App

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat:position.coords.latitude}), //callback function
      err => this.setState({ errorMessage: err.message }) //callback function
    );
  }//good place to do data-loading

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered');
  }//good place to do more data-loading when state/props change

  //Avoid conditional rendering
  //Scenario: if it needs a red border around the screen, we have to add it to each conditional case
  //We want to avoid this. So create a function for conditional rendering. 
  renderContent = () => {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if(this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat} /> //passing States as Props
    }
    // return <div>Loading...</div>
    return <Spinner message="Please accept location request"/>
  }

  //render method alone aims to retrun JSX
  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>//call this renderContent() in the render()
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));

//(position) => console.log(position)
//(err) => console.log(err)
//These are the response, callback functions.
