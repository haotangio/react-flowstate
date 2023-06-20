import React from 'react';
import ReactDOM from 'react-dom';
import { DataLayout } from 'react-flowstate';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import sampleSize from 'lodash.samplesize';

const REACT_LIBS = [
  {
    name: 'React Router',
    websiteUrl: 'https://reactrouter.com/',
  },
  {
    name: 'Material-UI',
    websiteUrl: 'https://mui.com/',
  },
  {
    name: 'Next.js',
    websiteUrl: 'https://nextjs.org/',
  },
  {
    name: 'Redux',
    description:
      'A predictable state container for JavaScript apps, providing a centralized store for managing application state.',
    websiteUrl: 'https://redux.js.org/',
  },
  {
    name: 'Axios',
    description:
      'A library for making HTTP requests from JavaScript applications, offering a simple API for sending and receiving data from APIs.',
    websiteUrl: 'https://axios-http.com/',
  },
];
const SIZE = 4;
const fetchFn = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(sampleSize(REACT_LIBS, SIZE)), 1000)
  );

const Basic = () => (
  <Container>
    <Typography variant="h5" textAlign="center" marginBottom={2}>
      Basic Example
    </Typography>
    <DataLayout
      dataSource={fetchFn}
      loadingIndicator={() => (
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    >
      {({ data, reload }) => (
        <Box>
          <Grid container spacing={2}>
            {data.map((jsLib, index) => (
              <Grid key={index} item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {jsLib.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={jsLib.websiteUrl} size="small">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Button onClick={() => reload()} variant="contained">
              Reload
            </Button>
            <Button
              onClick={() => reload({ shadow: true })}
              variant="contained"
            >
              Shadow Reload
            </Button>
          </Stack>
        </Box>
      )}
    </DataLayout>
  </Container>
);

ReactDOM.render(<Basic />, document.getElementById('root'));
