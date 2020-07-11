import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from './Pages';
import Route from './Components/Route';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {Pages.map((page, key) => {
          const { exact, path, component, props } = page;

          return <Route
            key={key}
            exact={exact}
            path={path}
            Component={component}
            pageProps={props}
          />
        })}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);