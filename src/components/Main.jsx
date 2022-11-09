import React from "react";
import Card from "./Card";
import data from "../assets/data";

function Main() {
  const cardData = data.map((item) => {
    const date = `${item.startDate} - ${item.endDate}`;
    return (
      <Card
        img={item.imageUrl}
        country={item.location}
        date={date}
        map={item.googleMapsUrl}
        title={item.title}
        description={item.description}
      />
    );
  });
  return <main>{cardData}</main>;
}

export default Main;
