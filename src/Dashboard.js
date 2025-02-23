// src/App.js or a similar main file

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          {/* Add other routes as needed */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
