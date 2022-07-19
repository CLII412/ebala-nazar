import React from "react";

function TripCard(props) {
  return (
    <li className="trip-card">
      <img src={props.image} alt="trip" />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{props.title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{props.duration}</strong> days
            </span>
            <span className="trip-info__level">{props.level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{`${props.price} $`}</strong>
        </div>
      </div>
      <a href={`/trip/${props.key} $`} className="button">
        Discover a trip
      </a>
    </li>
  );
}

export default TripCard;
