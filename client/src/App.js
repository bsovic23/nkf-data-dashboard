import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

// Pages
import Youtube from './pages/Youtube';
import NoMatch from './pages/NoMatch';

// TEST COMPONENTS

function App() {
  return (
    <section class='application'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/youtube"
            element={<Youtube />}
          />
           <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </section>
  );
}

export default App;