import React, { Component } from "react";
import { RoomContext } from "../context";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ImageGallery from "../components/ImageGallery";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = RoomContext;

  render() {
    //  console.log(this.props);
    const { getRoomData, loading } = this.context;
    const room = getRoomData(this.state.slug);
    // console.log(room);

    if (loading) {
      return <Loading />;
    }

    if (!room) {
      return (
        <>
          <Hero
            title="No Room Found"
            heroButtons={
              <Button
                variant="contained"
                size="large"
                href="/rooms"
                color="primary"
              >
                Back To Rooms
              </Button>
            }
          />
        </>
      );
    }
    const {
      name,
      images,
      description,
      price,
      size,
      capacity,
      type,
      pets,
      breakfast,
      extras,
    } = room;
    return (
      <>
        <ImageGallery images={images} name={name} />
        <div style={{ marginTop: "20px" }}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Typography variant="h4" gutterBottom>
                  Description
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid item container direction="column" xs={12} sm={6}>
                  <Typography variant="h4" gutterBottom>
                    Details
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Size:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{size}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{price}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Type:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{type}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Size: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{size}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">Capacity:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">
                        {capacity > 1
                          ? `${capacity} people`
                          : `${capacity} person`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        {breakfast && "Free Breakfast Included"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        {pets ? "Pets Allowed" : "Pets Not Allowed"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Extras:
                </Typography>
                <Typography variant="body1">
                  {extras.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default SingleRoom;
