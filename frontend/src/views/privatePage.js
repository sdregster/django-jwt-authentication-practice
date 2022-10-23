import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import useAxios from '../utils/useAxios';

const formStyle = {
  padding: 5,
  height: '50vh',
  width: 300,
  margin: '10px auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

function ProtectedPage() {
  const [res, setRes] = useState('');
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/test/');
        setRes(response.data.response);
      } catch {
        setRes('Something went wrong');
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid style={formStyle}>
      <Grid align="center">
        <h2>Private Page</h2>
        <p>{res && 'Authorization token is working!'}</p>
      </Grid>
    </Grid>
  );
}

export default ProtectedPage;
