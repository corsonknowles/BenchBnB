import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionsFormContainer from './SessionsFormContainer';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
      <Route path="/signup" component={SessionsFormContainer}/>
      "This is App"
  </div>
);

export default App;
