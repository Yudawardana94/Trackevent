import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider as StoreProvider} from 'react-redux';

import Navigation from './src/navigations'
import reducer from './src/stores/reducers';

const store = createStore(reducer, applyMiddleware(thunk));

export default () => {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
      // <Text>ini bisa kok</Text>
  );
};