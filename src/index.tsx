import App from './App';
import GlobalStyle from './GlobalStyle';
import ModalProvider from './contexts/ModalProvider';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <ModalProvider>
      <GlobalStyle />
      <App />
    </ModalProvider>
  </StrictMode>,
  document.getElementById('root'),
);
