import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const getUnique = (items, value) => {
  return [
    ...new Set(
      items.map((item) => {
        return item[value];
      })
    ),
  ];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  // console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  const classes = useStyles();

  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <MenuItem key={index} value={item}>
        {item}
      </MenuItem>
    );
  });
  //get unique no. of guests/people
  let guests = getUnique(rooms, "capacity");
  //map to jsx
  guests = guests.map((guest, index) => {
    return (
      <MenuItem value={guest} key={index}>
        {guest}
      </MenuItem>
    );
  });

  return (
    <>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Search Rooms
        </Typography>
        <Grid className={classes.grid}>
          <form className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Room Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={type}
                onChange={handleChange}
                label="Room Type"
                name="type"
              >
                {types}
              </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Guests
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={capacity}
                onChange={handleChange}
                label="Room Type"
                name="capacity"
              >
                {guests}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              {/* <InputLabel id="room-size">Room Size</InputLabel> */}
              <TextField
                label="Room Size"
                color="primary"
                type="number"
                name="minSize"
                value={minSize}
                onChange={handleChange}
                id="size"
                variant="outlined"
                helperText="Min"
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="Room Size"
                color="primary"
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                variant="outlined"
                helperText="Max"
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="breakfast"
                  id="breakfast"
                  value={breakfast}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Breakfast"
            />
            <FormControlLabel
              className={classes.formControl}
              control={
                <Checkbox
                  name="pets"
                  id="pets"
                  value={pets}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Pets"
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <Typography id="range-slider" gutterBottom>
                Room Price
              </Typography>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price || minPrice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <Input
                //className={classes.input}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                name="price"
                value={price}
                margin="dense"
                onChange={handleChange}
                inputProps={{
                  step: 10,
                  min: minPrice,
                  max: maxPrice,
                  type: "number",
                }}
              />
            </FormControl>
          </form>
        </Grid>
      </Container>
    </>
  );
}
