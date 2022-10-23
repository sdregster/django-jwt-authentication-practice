import { Button, Grid, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const formStyle = {
  padding: 5,
  height: '50vh',
  width: 300,
  margin: '10px auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
const btnstyle = { margin: '8px 0' };

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    username.length > 0 && loginUser(username, password);
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid style={formStyle}>
      <Grid align="center">
        <h2>Sing In Page</h2>
      </Grid>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        placeholder="Enter username"
        fullWidth
        required
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter password"
        type="password"
        fullWidth
        required
      />
      <Button
        onClick={handleSubmit}
        type="submit"
        color="primary"
        variant="contained"
        style={btnstyle}
        fullWidth>
        Sign in
      </Button>
      <Typography>
        {' '}
        Dont have an account? <Link to="/register">Sign Up</Link>
      </Typography>
    </Grid>
  );
};

export default LoginPage;
