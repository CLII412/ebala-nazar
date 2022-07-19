import React from "react";
import TripCard from "../components/tripCard";
import { Link } from "react-router-dom";
import trips from "../assets/data/trips.json";

function Index() {
  return (
    <div>
      <header className="header">
        <div className="header__inner">
          <a href="/" className="header__logo">
            Travel App
          </a>
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link to="./bookings" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img
                    src={require("../assets/images/briefcase.svg").default}
                    alt=" icon"
                  />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex="0">
                  <span className="visually-hidden">Profile</span>
                  <img
                    src={require("../assets/images/user.svg").default}
                    alt="profile icon"
                  />
                  <ul className="profile-nav__list">
                    <li className="profile-nav__item profile-nav__username">
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <button className="profile-nav__sign-out button">
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <section className="trips-filter">
          <h2 className="visually-hidden">Trips filter</h2>
          <form className="trips-filter__form" autoComplete="off">
            <label className="trips-filter__search input">
              <span className="visually-hidden">Search by name</span>
              <input
                name="search"
                type="search"
                placeholder="search by title"
              />
            </label>
            <label className="select">
              <span className="visually-hidden">Search by duration</span>
              <select name="duration">
                <option value="">duration</option>
                <option value="0_x_5">&lt; 5 days</option>
                <option value="5_x_10">&lt; 10 days</option>
                <option value="10_x">&ge; 10 days</option>
              </select>
            </label>
            <label className="select">
              <span className="visually-hidden">Search by level</span>
              <select name="level">
                <option value="">level</option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="difficult">difficult</option>
              </select>
            </label>
          </form>
        </section>
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            {trips.map((trip) => (
              <TripCard
                key={trip.id}
                title={trip.title}
                duration={trip.duration}
                price={trip.price}
                level={trip.level}
                description={trip.description}
                createdAt={trip.createdAt}
                image={trip.image}
              />
            ))}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <span className="footer__text">
          from{" "}
          <a className="footer__link" href="https://binary-studio.com">
            binary studio
          </a>{" "}
          with
          <img
            className="footer__icon"
            src={require("../assets/images/heart.svg").default}
            alt="heart icon"
          />
        </span>
      </footer>
    </div>
  );
}

export default Index;
