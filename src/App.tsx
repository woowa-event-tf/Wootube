import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';

import Nav from './components/Nav';
import Header from './components/Header';
import BranPage from './pages/BranPage';
import GoniPage from './pages/GoniPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
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
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  border: 1px solid #c7c7c7;
  border-top: none;
`;

const Footer = styled.footer`
  border-top: 1px solid #d1d1d1;
  width: 100%;
  height: 4rem;
  background-color: #fafafa;
`;

export default App;
