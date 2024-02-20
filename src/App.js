import React from 'react';
import { BrowserRouter as HashRouter } from 'react-router-dom';

// auth provider

import routes, { renderRoutes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </React.Fragment>
  );
};

export default App;
