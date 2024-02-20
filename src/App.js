import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// auth provider

import routes, { renderRoutes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Router basename="glide_web/">{renderRoutes(routes)}</Router>
    </React.Fragment>
  );
};

export default App;
