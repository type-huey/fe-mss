import React from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import Header from '@/components/header/header';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles>
        <Header>
          <div></div>
        </Header>
      </GlobalStyles>
    </div>
  );
};

export default App;
