import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import Songs from "./components/Songs"
import SongCreate from "./components/SongCreate"
import SongDetail from "./components/SongDetail"
import App from "./components/App"
import { Router, Route, hashHistory, IndexRoute} from 'react-router'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}> 
        <Route path='/' component={App}>
          <IndexRoute component={Songs} />
          <Route path='songs/new' component={SongCreate} />
          <Route path='songs/:id' component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};


ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
