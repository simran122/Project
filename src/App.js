import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Dashboard from './Dashboard.js';
import LoginPage from './LoginPage.js';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={< Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

