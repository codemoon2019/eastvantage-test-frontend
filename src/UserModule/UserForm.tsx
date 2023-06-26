import React, { useState } from 'react';
import axios from 'axios';

const UserForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [roles, setRoles] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post('/api/users', {
        full_name: fullName,
        email: email,
        roles: roles,
      })
      .then((response: any) => {
        console.log(response.data);
        // Redirect to the user list page
        window.location.href = '/users';
      })
      .catch((error: any) => {
        console.log(error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select
        multiple
        value={roles}
        onChange={(e) =>
          setRoles(Array.from(e.target.selectedOptions, (option) => option.value))
        }
      >
        <option value="Author">Author</option>
        <option value="Editor">Editor</option>
        <option value="Subscriber">Subscriber</option>
        <option value="Administrator">Administrator</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;