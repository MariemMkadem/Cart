/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './App';
import Get_Selected_Photo from './gql/cache/GetSelectedPhoto';
import Get_Counter from './gql/cache/Counter';
const defaultState = {
  isConnect: false,
  selectedPhotos: [],
  counter: {
    __typename: 'Counter',
    value: [],
  },
  

};
// This is the same cache you pass into new ApolloClient
const cache = new InMemoryCache();
persistCache({
  cache,
  storage: window.localStorage,
}).then(() => {
  const client = new ApolloClient({
    cache,
    uri: process.env.REACT_APP_URL,
    clientState: {
      defaults: defaultState,
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnect }) => {
            cache.writeData({ data: { isConnect } });
            return null;
          },
          addPhoto: (_, { id, title, price, qte }) => {
            const query = Get_Selected_Photo;
            const { selectedPhotos } = cache.readQuery({ query });
            const updatedPhoto = [...selectedPhotos, { id, title, price, qte }];
            cache.writeQuery({ query, data: { selectedPhotos: updatedPhoto } });
            return null;
          },
          deletePhoto: () => {
            cache.WriteQuery({ query: Get_Selected_Photo, data: this.selectedPhotos })
            return null;
          },
          incrementCounter: () => {
            const query = Get_Counter;
            const { counter } = cache.readQuery({ query });
            const data = {
              counter: {
                __typename: 'Counter',
                value: Number(counter.value + 1),
              },
            };
            cache.writeData({ data });
            return null;
          },
          decrementCounter: () => {
            const query = Get_Counter;
            const { counter } = cache.readQuery({ query });
            const data = {
              counter: {
                __typename: 'Counter',
                value: Number(counter.value - 1),
              },
            };
            cache.writeData({ data , query });
            return null;
          },

        },
      },
    },
  });

  function Index() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
  ReactDOM.render(<Index />, document.getElementById('root'));
});
