import React from "react";
import Room from "../components/Room";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const RoomList = ({ rooms }) => {
  // console.log({ rooms });
  if (rooms.length === 0) {
    return (
      <>
        <Container>
          <Grid container spacing={4}>
            <Typography variant="h3" color="textPrimary" gutterBottom>
              No rooms matched based on your search.
            </Typography>
          </Grid>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default RoomList;
