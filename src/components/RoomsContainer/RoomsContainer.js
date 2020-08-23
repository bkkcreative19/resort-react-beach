import React, { useContext } from "react";
import RoomsFilter from "../../components/RoomsFilter/RoomsFilter";
import RoomsList from "../../components/RoomsList/RoomsList";
import { RoomContext } from "../../context/context";

const RoomsContainer = () => {
  const { sortedRooms, rooms } = useContext(RoomContext);

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList sortedRooms={sortedRooms} />
    </div>
  );
};

export default RoomsContainer;
