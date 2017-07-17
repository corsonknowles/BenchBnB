import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    let loggedInPage = (<div>
      { user.username }
      <button> Logout </button>
    </div>
    )
    let loggedOutPage = (
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Sign Up</Link>
    )

    let page;
    page = (this.props.currentUser ? loggedInPage : loggedOutPage);
    return page;
  }
}

export default Greeting;
