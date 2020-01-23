import React from 'react'
import RoomFilter from "./RoomFilter";
import Loading from "../Utilities/Loading";
import RoomList from "./RoomsList.js";

import { withRoomConsumer } from '../../context'


function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context

  if (loading) {
    return <Loading />
  } else {
    return (
      <>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    )
  }
}


export default withRoomConsumer(RoomsContainer)










// import React from 'react'
// import RoomFilter from "./RoomFilter.js";
// import Loading from "./Loading";
// import RoomList from "./RoomList.js";

// import { RoomConsumer } from '../context'

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         // console.log(value);
//         const { loading, sortedRooms, rooms } = value
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             Hello from Room Container
//               <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         )

//       }
//       }
//     </RoomConsumer>
//   )
// }
