import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Link from '@material-ui/core/Link';
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    //   "&:hover": {
    //     backgroundColor: "#3fd0d4",
    // },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {},
  name: {
    textTransform: "capitalize",
  },
  cardActionArea: {
    // boxShadow: "0 3px 12px 0 rgba(11,65,153,0.1)",
    "&:hover": {
      background: "#3fd0d4",
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Room = ({ room }) => {
  const { id, images, name, price, slug } = room;

  const classes = useStyles();
  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4} className={classes.grid}>
        <CardActionArea
          href={`rooms/${slug}`}
          className={classes.cardActionArea}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={images[0]}
              title="Room"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.name}
              >
                {name}
              </Typography>
              <Typography gutterBottom variant="h5">
                ${price}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
  }),
};

export default Room;
