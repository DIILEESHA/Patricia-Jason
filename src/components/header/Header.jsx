import React from "react";
import "./header.css";

import couple1 from "../../assets/couple1.webp"
import couple2 from "../../assets/couple2.webp"
import couple3 from "../../assets/couple3.jpeg"
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="exact_date">
          <h2 className="date">3 · 21 · 2026</h2>
        </div>
        <div className="header_sub ty">
          <img
            alt=""
            className="header_img nasiya"
            src={couple2}
          />
        </div>
        <div className="header_sub jur">
          <img
           src={couple1}
            alt=""
            className="header_img pasiya"
          />

          <p className="header_p hg">
            CELEBRATING A LOVE STORY YEARS IN THE MAKING—WHERE EVERY CHAPTER LED
            US HERE, AND FOREVER BEGINS NOW.
          </p>
        </div>
        <div className="header_sub ty">
          <img
            src={couple3}
            alt=""
            className="header_img nasiya"
          />
        </div>
      </div>

      <div className="naughty">
        <div className="naughty_sub">
          <img
            src={couple2}
            alt=""
            className="naughty_img"
          />
        </div>
        <div className="naughty_sub">
          <img
              src={couple3}

            alt=""
            className="naughty_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
