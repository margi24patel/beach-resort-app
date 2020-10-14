import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    paddingTop: "100px",
    paddingBottom: "100px",
    backgroundColor: "#ffffff !important",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
      paddingBottom: "60px",
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 10px",
  },
  icon: {
    fontSize: "350%",
  },
  serviceTitle: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: "center",
    //fontSize: "18px",
    fontWeight: "500",
    color: "#31517A",
    margin: "20px 0 10px 0 !important",
  },
  serviceInfo: {
    //fontSize: "1rem",
    textAlign: "center",
    color: "#6B708F",
  },

  serviceBox: {
    marginBottom: "30px",
    transition: "ease-in-out 0.3s",
    borderRadius: "10px",
    "&:hover,&:focus": {
      boxShadow: "12px 15px 20px 6px rgba(11,65,153,0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },
}));

const services = [
  {
    icon: <FaCocktail />,
    title: "Free Cocktails",
    info:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray.",
  },
  {
    icon: <FaHiking />,
    title: "Endless Hiking",
    info:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray.",
  },
  {
    icon: <FaShuttleVan />,
    title: "Free Shuttle",
    info:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray.",
  },
  {
    icon: <FaBeer />,
    title: "Strongest Beer",
    info:
      "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray.",
  },
];

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={5} justify="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Our Services
            </Typography>
          </Grid>

          {services.map((service, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={3}
                className={classes.serviceBox}
              >
                <div className={classes.item}>
                  <Icon color="primary" className={classes.icon}>
                    {service.icon}
                  </Icon>
                  <Typography
                    variant="h5"
                    className={classes.serviceTitle}
                    color="textPrimary"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                    className={classes.serviceInfo}
                  >
                    {service.info}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Services;
