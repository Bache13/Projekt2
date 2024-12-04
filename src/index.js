import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Budget from './pages/budget';
import About from './pages/about'
import Profile from './pages/profile'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
    {/* <App /> */}
    <Budget />
    {/* <About />
    <Profile/> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

