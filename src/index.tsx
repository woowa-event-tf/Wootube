import App from './App';
import GlobalStyle from './GlobalStyle';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
