import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/RepositoryList/index.tsx';

import store from './store/index.ts';

function App() {
  return <Provider store={store}><RepositoryList /></Provider>;
};

export default App;
