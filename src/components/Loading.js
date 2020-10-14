import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <>
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <CircularProgress />
        </Grid>
      </Container>
    </>
  );
};

export default Loading;
