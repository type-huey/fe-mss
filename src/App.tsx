import React from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Header from '@/components/header/Header';
import Filter from '@/components/header/filter/Filter';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles>
        <Header>
          <Filter />
        </Header>
      </GlobalStyles>
    </div>
  );
};

export default App;
