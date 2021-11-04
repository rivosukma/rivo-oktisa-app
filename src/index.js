import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Header from './views/components/header/Header';
import Homepage from './views/containers/homepage/Homepage';

const Container = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={ props => 
          <> 
            <Suspense fallback={'Loading ...'}>
              <Header />
              <Homepage {...props}/>
            </Suspense>
          </>
        }
        />
        <Route
          exact
          path='/:slug'
          render={ props => 
          <> 
            <Suspense fallback={'Loading ...'}>
              <Header />
              <Homepage {...props}/>
            </Suspense>
          </>
        }
        /> 
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
    <Container />,
  document.getElementById('root')
);

