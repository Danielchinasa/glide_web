import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// auth provider

import routes, { renderRoutes } from './routes';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename="https://danielchinasa.github.io/glide_web">{renderRoutes(routes)}</BrowserRouter>
    </React.Fragment>
  );
};

export default App;
