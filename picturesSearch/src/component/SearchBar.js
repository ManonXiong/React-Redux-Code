import React from 'react';

class SearchBar extends React.Component {
    state = {term:''} //with state, this is a controlled component

    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onSubmitForm = (e) => {
      e.preventDefault();
      //use "props", 1st "this" refers to the SearchBar instance
      this.props.handleSearchSubmit(this.state.term);
    }

    render() {
        return(
            <div className="ui segment">
              <form className="ui form" onSubmit={this.onSubmitForm} >
                <div className='field'>
                  <label>Key Word Search</label>
                  <input type='text'
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                </div>
              </form>
            </div>
        )
    }
}

export default SearchBar;


//Notes from lectures:

//onChange={this.onInputChange} -- event handler
//Here, a callback function is passed to the property 'onChange' of input element.
//Don't use onChange={this.onInputChange()} --> with (), you invoke this function at onece.
//This callbackfunction is listening to the event on this input element.

//Second way to write event handler is:
//onChange={(event) => console.log(event.target.value)}

//If the requirement is, no matter what is typed in, it shows upper-case letters, then:
//this.setState({term: e.target.value.toUpperCase()})

//When there's <form> element and you press Enter, browsers take this as granted for submitting the form.
//Browser will refresh the page and the data you enter is sent to server or something is sent back.
//But we don't want to refresh the page. So we have to prevent the default action.

//Define a function in a class component, and pass it as callback in the elements in render() or to its child.
//If use function funcName() {...}, the "this" in this function will not work as what we expected.
//We think "this" refer to the instance of the class, but it's not. 
//e.g.: function funcName() {console.log(this.state.term)}
//Error message: "state" property is undefined, because now the state = {term: ...} is defined outside of funcName().
//3 ways to solve it:
//1) use "bind": this.funcName = this.funcName.bind(this) --fix the correct value of "this"
//2) use arrow function: funcName = () => {...} --because Babel complies and solve it
//3) pass the arrow function directly into the child's props, similar to onChange={() => {...}}

//Communicating Child to Parent
//Clarify the functionalities of Child Components and Parent Component.
//SearchBar's job is to input keywords and submit the data. It's not its job to fetch data back. This is its parent, App's job. The application has to send the request and fetch data.
//Just like defining a function in the class and passing it to the element's props as a callback function, we can define a function in the parent component and pass the function as props of the child component.
//In the child component, we use this.props.XXX
//So props can be used in class component, too. Not just in the function component.
