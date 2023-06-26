import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  full_name: string;
  email: string;
  roles: string[];
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response: any) => {
        setUsers(response.data.users);
      })
      .catch((error: any) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.full_name}</p>
          <p>Email: {user.email}</p>
          <p>Roles: {user.roles.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;