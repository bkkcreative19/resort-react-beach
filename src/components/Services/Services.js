import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../../components/Title/Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ipsa.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ipsa.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free rides with Shuttle",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ipsa.",
      },
      {
        icon: <FaBeer />,
        title: "Best Beer",
        info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ipsa.",
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='Services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='service'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
