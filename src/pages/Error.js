import React from "react";
import Hero from "../components/Hero";
import Button from "@material-ui/core/Button";

export const Error = () => {
  return (
    <>
      <Hero
        title="404 Not Found"
        description="The page your are looking for is temporary unavialble"
        heroButtons={
          <Button variant="contained" href="/" color="primary">
            Back To Home
          </Button>
        }
      />
    </>
  );
};
