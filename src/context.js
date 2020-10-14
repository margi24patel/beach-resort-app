// https://reactjs.org/docs/context.html#when-to-use-context
import React, { Component } from "react";
import Client from "./Contentful";
// import items from "./data";

// Client.getEntries({
//   content_type: "beachResortRoom",
// })
//   .then((response) => console.log(response.items))
//   .catch(console.error);

const RoomContext = React.createContext(); //creating context
//2 components: Provider and Consumer
//Provider was able to allowing all the components to access it  in the tree

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        // order: "sys.createdAt"
        order: "-fields.price",
      });

      //items
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((featuredRoom) => {
        return featuredRoom.featured === true;
      });

      let maxPrice = Math.max(
        ...rooms.map((room) => {
          return room.price;
        })
      );

      let maxSize = Math.max(
        ...rooms.map((room) => {
          return room.size;
        })
      );

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    // let rooms = this.formatData(items);
    //   let featuredRooms = rooms.filter((featuredRoom) => {
    //     return featuredRoom.featured === true;
    //   });
    //   // console.log("FR", featuredRooms);

    //   let maxPrice = Math.max(
    //     ...rooms.map((room) => {
    //       return room.price;
    //     })
    //   );
    //   //console.log(maxPrice);

    //   let maxSize = Math.max(
    //     ...rooms.map((room) => {
    //       return room.size;
    //     })
    //   );

    //   // console.log(maxSize);
    //   this.setState({
    //     rooms,
    //     featuredRooms,
    //     sortedRooms: rooms,
    //     loading: false,
    //     price: maxPrice,
    //     maxPrice,
    //     maxSize,
    //   });
  }

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => {
        let path = image.fields.file.url;
        return path;
      });
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  getRoomData = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => {
      return room.slug === slug;
    });
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // const type = event.target.type;
    // const value = event.target.value;
    const name = event.target.name;
    //console.log(("handleChange", name, type, value));

    //console.log(target.name);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    //transform values
    let tempRooms = [...rooms]; //all the rooms
    capacity = parseInt(capacity); //capacity/guests
    price = parseInt(price); //price to int

    //for Room Type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => {
        return room.type === type;
      });
    }

    //for Guests/People
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => {
        return room.capacity >= capacity;
      });
    }

    //for Price-Range
    tempRooms = tempRooms.filter((room) => room.price <= price);

    //for Room-Size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //for Breakfast
    if (breakfast === true) {
      tempRooms = tempRooms.filter((room) => room.breakfast === breakfast);
    }

    //for pets
    if (pets === true) {
      tempRooms = tempRooms.filter((room) => room.pets === pets);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    //console.log(items)
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoomData: this.getRoomData,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
