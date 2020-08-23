import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import RoomsContainer from "../../components/RoomsContainer/RoomsContainer";
import { RoomContext } from "../../context/context";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms);
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='Our Rooms'>
          <Link className='btn-primary' to='/'>
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
