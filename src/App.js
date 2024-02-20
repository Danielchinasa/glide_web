import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// auth provider

import routes, { renderRoutes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>{renderRoutes(routes)}</Router>
    </React.Fragment>
  );
};

export default App;
