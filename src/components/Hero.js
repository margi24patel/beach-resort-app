import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import defaultImg from "../images/room-1.jpeg";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  mainHero: {
    minHeight: "60vh",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
    backgroundImage: `url(${defaultImg || "banner-image"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
    padding: "74px 0px",
  },
  mainHeroContent: {
    position: "relative",
    padding: theme.spacing(3),
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const Hero = ({ title, description, backgroundImage, heroButtons }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.mainHero}
      style={{ backgroundImage: `url(${defaultImg})` }}
    >
      <div className={classes.overlay} />
      <div className={classes.mainHeroContent}>
        <Container maxWidth="md" style={{ padding: "24px" }}>
          <Typography
            //component="h1"
            variant="h1"
            align="center"
            // color="textPrimary"
            style={{ color: "#fff" }}
            gutterBottom
          >
            {title}{" "}
          </Typography>
          <Divider
            variant="middle"
            style={{
              width: "10rem",
              margin: "1.7rem auto",
              height: "5px",
              backgroundColor: "rgba(0, 188, 212, 1)",
            }}
          />

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {description}{" "}
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>{heroButtons}</Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </Paper>
  );
};

Hero.propTypes = {
  title: PropTypes.any,
  description: PropTypes.any,
};
export default Hero;
