import React from "react";
import Room from "../../components/Room/Room";

const RoomsList = ({ sortedRooms }) => {
  if (sortedRooms.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no rooms match your search criteria</h3>
      </div>
    );
  }

  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {sortedRooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
