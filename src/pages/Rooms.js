import React from "react";
import RoomContainer from "../components/RoomContainer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Button from "@material-ui/core/Button";

export const Rooms = () => {
  return (
    <div>
      <Hero
        title="Our Rooms"
        heroButtons={
          <Button href="/" size="medium" variant="contained" color="primary">
            Back To Home
          </Button>
        }
      />
      <RoomContainer />
      <Footer />
    </div>
  );
};
