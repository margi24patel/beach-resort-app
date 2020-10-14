import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer); //using HOC(Higher-Order-Component)

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         // console.log("Room Cousumer",value);
//         const { loading, rooms, sortedRooms } = value
//         return (
//           <>
//             <div>
//               Rooms Container
//               <RoomsFilter />
//               <RoomsList />
//             </div>
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
