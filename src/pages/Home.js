import React from "react";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";

export const Home = () => {
  return (
    <div>
      <Hero
        title="Luxurious Rooms"
        description="Deluxe Rooms Starting At $299"
        heroButtons={
          <Button variant="contained" size="large" href="/rooms" color="primary">
            Our Rooms
          </Button>
        }
      />
      <Services />
      <FeaturedRooms />
      <Footer />
    </div>
  );
};
