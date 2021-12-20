import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from './routes';

ReactDOM.render(
  <AppRoutes />,
  document.getElementById('root')
);