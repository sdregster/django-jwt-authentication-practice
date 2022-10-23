import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    password === password2 && registerUser(username, password, password2);
    // console.log(username, password, password2);
  };

  return (
    // <section>
    //   <form onSubmit={handleSubmit}>
    //     <h1 style={{ width: '100%', textAlign: 'center' }}>Register Page</h1>
    //     <hr />
    //     <div>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         id="username"
    //         onChange={(e) => setUsername(e.target.value)}
    //         placeholder="Username"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Password"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="confirm-password">Confirm Password</label>
    //       <input
    //         type="password"
    //         id="confirm-password"
    //         onChange={(e) => setPassword2(e.target.value)}
    //         placeholder="Confirm Password"
    //         required
    //       />
    //       <p>{password2 !== password ? 'Passwords do not match' : ''}</p>
    //     </div>
    //     <button>Register</button>
    //   </form>
    // </section>
    <Grid style={formStyle}>
      <Grid align="center">
        <h2>Sing Up Page</h2>
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
      <TextField
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        label="Confirm Password"
        placeholder="Confirm Password"
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
        Already have an account? <Link to="/login">Sign In</Link>
      </Typography>
    </Grid>
  );
}

export default Register;
