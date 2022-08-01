import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loading from 'src/Components/Common/Loading';
import './index.css';
ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
