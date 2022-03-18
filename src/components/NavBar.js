import { useEffect, useState } from "react";

import "./styles/NavBar.scss";

import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ setScroll }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    menuVisible ? setScroll(false) : setScroll(true);
    // eslint-disable-next-line
  }, [menuVisible]);

  const search = () => {
    if (searchTerm.replaceAll(" ", "").length !== 0) {
      navigate(`/search/${searchTerm.replaceAll(" ", "-")}`);
      setMenuVisible(false);
    }
  };

  return (
    <nav className="nav">
      <Link to="/">
        <p>Movies.Info</p>
      </Link>
      <button
        className="nav--menu-btn"
        onClick={() => {
          menuVisible ? setMenuVisible(false) : setMenuVisible(true);
        }}
      >
        <FontAwesomeIcon icon={faBars} />{" "}
      </button>
      <div className={`nav--menu--wrapper ${menuVisible && "wrapper-active"}`}>
        <button
          className={`nav--menu--close-btn ${
            menuVisible && "close-btn-active"
          }`}
          onClick={() => setMenuVisible(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={`nav--menu ${menuVisible && "menu-active"}`}>
          <ul className="nav--menu--list">
            <li>
              <Link to="/">
                <button onClick={() => setMenuVisible(false)}>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/movie">
                <button onClick={() => setMenuVisible(false)}>Movies</button>
              </Link>
            </li>
            <li>
              <Link to="/tv">
                <button onClick={() => setMenuVisible(false)}>Tv Shows</button>
              </Link>
            </li>
          </ul>

          <div className="nav--menu--search">
            <input
              type="input"
              className="nav--menu--search--input"
              placeholder="search..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                e.keyCode === 13 && search();
              }}
            />
            <button className="nav--menu--search--btn" onClick={search}>
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
