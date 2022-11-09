import React from "react";

function Card(props) {
  console.log(props);
  return (
    <article>
      <img src={props.img} />
      <hgroup>
        <div>
          <span>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              {props.country}
            </p>
            <p>
              <a href={props.map}>View on Google Maps</a>
            </p>
          </span>
          <h1>{props.title}</h1>
        </div>
        <h3>{props.date}</h3>
        <p>{props.description}</p>
      </hgroup>
    </article>
  );
}

export default Card;
