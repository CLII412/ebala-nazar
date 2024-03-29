import { useState } from "react";

const Modal = ({ setShowModal }) => {
  const [guestCount, setGuestCount] = useState(1);
  console.log(guestCount);
  const price = 4000;
  return (
    <div className="modal ">
      <div className="trip-popup">
        <button
          className="trip-popup__close"
          onClick={() => setShowModal(false)}
        >
          ×
        </button>
        <form className="trip-popup__form" autoComplete="off">
          <div className="trip-info">
            <h3 className="trip-info__title">Iceland</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration">
                <strong>15</strong> days
              </span>
              <span className="trip-info__level">easy</span>
            </div>
          </div>
          <label className="trip-popup__input input">
            <span className="input__heading">Date</span>
            <input name="date" type="date" required />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Number of guests</span>
            <input
              name="guests"
              type="number"
              min="1"
              max="10"
              defaultValue="1"
              required
              onChange={(target) => setGuestCount(target.target.value)}
            />
          </label>
          <span className="trip-popup__total">
            Total:{" "}
            <output className="trip-popup__total-value">
              {price * guestCount}$
            </output>
          </span>
          <button className="button" type="submit">
            Book a trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
