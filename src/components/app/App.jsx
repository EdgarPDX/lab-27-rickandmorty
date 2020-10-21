import React from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import Characters from '../page-characters/Characters';
import Header from '../page-characters/Header';
import DetailPage from '../page-characters/DetailPage';

export default function App() {
  return (
  <>
    <Router>
      <Header/>
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <Characters {...routerProps} />} 
          />
          <Route 
            path="/detail/:id" 
            exact
            render={(routerProps) => <DetailPage {...routerProps} />} 
          />
        </Switch>
    </Router>
  </>
  )
}
