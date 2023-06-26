import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './UserModule/UserForm';
import UserList from './UserModule/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={UserForm} />
      <Route path="/users" component={UserList} />
    </Router>
  );
};

export default App;