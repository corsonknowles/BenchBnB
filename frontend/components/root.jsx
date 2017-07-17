import { HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      "This is root"
      <App/>
    </HashRouter>
  </Provider>
);
