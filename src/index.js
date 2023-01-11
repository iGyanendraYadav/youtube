import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './_base.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>


);


