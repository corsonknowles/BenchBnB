import React from 'react';
import Greeting from './greeting';
import { requestLogout } from '../actions/session_actions';

class GreetingContainer extends React.Component {

  const mapStateToProps = state => {
    return { currentUser: state.session.currentUser }
  };

  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(requestLogout())
    }
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
