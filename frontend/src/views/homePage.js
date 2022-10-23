import { Grid } from '@mui/material';
import { useContext } from 'react';
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

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <Grid style={formStyle}>
      <Grid align="center">
        <h2>Home page</h2>
        {user ? (
          <p>{`Glad to see you, ${user.username}!`}</p>
        ) : (
          <p>You should login to see content</p>
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
