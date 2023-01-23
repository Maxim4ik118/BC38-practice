import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/user.slice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();

  const hendlerSubmit = e => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={hendlerSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type={visiblePassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span onClick={() => setVisiblePassword(!visiblePassword)}>
            {visiblePassword ? 'Сховати' : 'Показати'} пароль
          </span>
        </label>
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LoginPage;
