import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BranPage from './pages/BranPage';
import GoniPage from './pages/GoniPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import styled from '@emotion/styled';

const App = () => {
  return (
    <>
      <AnnounceContainer>반응형 제작중 🛠 큰 화면에서 봐주세요 🙇‍♀️</AnnounceContainer>

      <Container>
        <HashRouter>
          <Header />
          <Wrapper>
            <Nav />
            <Main>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/c/goni" component={GoniPage} />
                <Route exact path="/c/bran" component={BranPage} />
                <Redirect to="/" />
              </Switch>
            </Main>
          </Wrapper>
        </HashRouter>
      </Container>
    </>
  );
};

const AnnounceContainer = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  border: 1px solid #c7c7c7;
  border-top: none;

  height: 92vh;
  overflow: auto;
`;

export default App;
