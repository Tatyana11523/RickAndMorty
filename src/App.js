import React from 'react';
import {RickMorty} from './RickMorty';
import {MainHeader} from './MainHeader';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <MainHeader />
      <div className={'grid'}>
        <RickMorty />
      </div>
    </Provider>
  );
}

export default App;
