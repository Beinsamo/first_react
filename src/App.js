import React from 'react';
import Header from "./common/header";
import store from './store/store.js';
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Header />
    </Provider>
  );
}

export default App;
