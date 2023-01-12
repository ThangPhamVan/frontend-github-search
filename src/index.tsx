import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Loading from './components/common/loading';
import './index.css';
ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
