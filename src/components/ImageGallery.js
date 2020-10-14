import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import defaultImg from "../images/room-1.jpeg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },

  roomCoverImage: {
    minHeight: "60vh",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  roomTitle: {
    textTransform: "Capitalize",
    position: "relative",
    padding: theme.spacing(3),
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  btnRooms: {
    "&:hover": {
      backgroundColor: "rgba(0, 188, 212, 1)",
      color: "#000",
    },
  },
}));

export default function ImageGallery({ images, name }) {
  const classes = useStyles();
  const [bcImg, setBgCoverImg] = useState(images[0]);

  return (
    <>
      <Paper
        className={classes.roomCoverImage}
        style={{ backgroundImage: `url(${bcImg || defaultImg})` }}
      >
        {/* <img src={bcImg} alt={name} />  */}
        <div className={classes.roomTitle}>
          <Typography
            variant="h3"
            component="h1"
            color="textPrimary"
            gutterBottom
          >
            {name}
          </Typography>
          <Button
            variant="outlined"
            href="/rooms"
            className={classes.btnRooms}
            color="primary"
          >
            Back To Rooms
          </Button>
        </div>
      </Paper>
      <div className={classes.root}>
        <Container>
          <GridList className={classes.gridList} cols={2.5}>
            {images.map((image, index) => {
              return (
                <GridListTile key={image}>
                  <img
                    onClick={() => setBgCoverImg(image)}
                    key={index}
                    src={image}
                    alt={name}
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </Container>
      </div>
    </>
  );
}
