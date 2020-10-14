import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    // console.log("value", value);
    const { featuredRooms, loading } = this.context;

    const rooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Featured Rooms
              </Typography>
            </Grid>

            {loading ? <Loading /> : rooms}
          </Grid>
        </Container>
      </>
    );
  }
}
