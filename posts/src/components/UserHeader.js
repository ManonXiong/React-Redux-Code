import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }
    render() {
    //   const user = this.props.users.find(user => user.id === this.props.userId); --see notes(2)
      const {user} = this.props;
      if(!user) {
          return null;
      }
      return <div className='header'>{user.name}</div>
    }
    //Remind: if not destructure {user}, then remember to use 'if(!this.props.user)' -- this.props
}

const mapStateToProps = (state, ownProps) => {
    // const user = state.users.find(user => user.id === this.props.userId); --wrong, see notes(3)
    return {user: state.users.find(user => user.id === ownProps.userId)}
    //Here, the key 'user' refers to props
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);

//Notes:
//1. Here, we use 'if(!user) {...}', because at the first initialization, we don't get data back.
//Error occurs -- TypeError: Cannot read property 'name' of undefined

//2.const user = this.props.users.find(user => user.id === this.props.userId);
//Here, we move it to mapStateToProps, because when the app is getting bigger, 
//it's convenient to separate connect part and the component.
//In this way, we can sometimes reuse the mapStateToProps or the component.

//3.const user = state.users.find(user => user.id === this.props.userId);
//'this.props.userId', props is only available in that component. Then how can we get this userId?
//In Redux store, apart from 'state', we can also pass 'ownProps' to the mapStateToProps.
//Here, 'ownProps' is a reference to the props passed in the component.

//4.ownProps --remember this concept