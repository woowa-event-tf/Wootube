import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';

import Nav from './components/Nav';
import Header from './components/Header';
import BranPage from './pages/BranPage';
import GoniPage from './pages/GoniPage';

const App = () => {
  return (
    <>
      <HashRouter>
        <Header></Header>
        <Wrapper>
          <Nav></Nav>
          <Switch>
            <Route exact path="/c/goni" component={GoniPage} />
            <Route exact path="/c/bran" component={BranPage} />
            <Redirect to="/" />
          </Switch>
        </Wrapper>
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 4rem;
`;

const Footer = styled.footer`
  border-top: 1px solid #d1d1d1;
  width: 100%;
  height: 4rem;
  background-color: #fafafa;
`;

export default App;
