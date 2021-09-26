import { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';

import Nav from './components/Nav';
import Header from './components/Header';
import BranPage from './pages/BranPage';
import GoniPage from './pages/GoniPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [isBrowserSmall, setIsBrowserSmall] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const resizingEvent = () => {
      if (window.innerWidth < 1280) {
        setIsBrowserSmall(true);
      } else {
        setIsBrowserSmall(false);
      }
    };

    window.addEventListener('resize', resizingEvent);

    return () => {
      window.removeEventListener('resize', resizingEvent);
    };
  }, [isBrowserSmall]);

  return isBrowserSmall ? (
    <AnnounceContainer>반응형은 아직 준비중입니다. 큰 화면으로 봐주세요!</AnnounceContainer>
  ) : (
    <div>
      <HashRouter>
        <Header></Header>
        <Wrapper>
          <Nav></Nav>
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
    </div>
  );
};

const AnnounceContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  border: 1px solid #c7c7c7;
  border-top: none;
`;

export default App;
