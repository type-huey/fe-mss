import React from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Header from '@/components/header/Header';
import Filter from '@/components/header/filter/Filter';
import GoodsList from '@/components/goods/GoodsList';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles>
        <Header>
          <Filter />
        </Header>
        <GoodsList />
      </GlobalStyles>
    </div>
  );
};

export default App;
