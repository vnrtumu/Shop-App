import React from 'react';
import ShopNavigator from './src/Navigation/ShopNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import productsReducer from './src/store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
