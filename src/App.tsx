import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from './UserModule/UserForm';
import UserList from './UserModule/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
};

export default App;