import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider, ApolloClient } from '@apollo/client';
import { cache } from './cache';


const client = new ApolloClient({
  uri: 'https://snowtooth.moonhighway.com',
  cache
});

export const Aplication = () => <ApolloProvider client={client}>
  <App />
</ApolloProvider>
ReactDOM.render(
  <React.StrictMode>
    <Aplication />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
