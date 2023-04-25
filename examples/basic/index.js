import React from "react";
import ReactDOM from "react-dom";
import { DataLayout } from "react-flowstate";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const fetchFn = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            name: "React Router",
            description:
              "A library for building single-page applications with dynamic routing in React.",
            websiteUrl: "https://reactrouter.com/"
          },
          {
            name: "Material-UI",
            description:
              "A library of React components that implement Google's Material Design specification, offering pre-designed components for building responsive and customizable UIs.",
            websiteUrl: "https://mui.com/"
          },
          {
            name: "Next.js",
            description:
              "A framework for building server-rendered React applications, offering features like automatic code splitting and server-side rendering.",
            websiteUrl: "https://nextjs.org/"
          }
        ]),
      1000
    )
  );

const Basic = () => (
  <Container>
    <Typography variant="h4" textAlign="center" marginBottom={2}>
      Basic Example
    </Typography>
    <DataLayout
      fetchFn={fetchFn}
      loadingIndicator={() => (
        <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
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
                    <Typography variant="body2">{jsLib.description}</Typography>
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
          <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
            <Button onClick={() => reload()} variant="contained">
              Reload
            </Button>
          </Box>
        </Box>
      )}
    </DataLayout>
  </Container>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
