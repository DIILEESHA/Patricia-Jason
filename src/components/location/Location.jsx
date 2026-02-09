import "./l.css";

const Location = () => {
  return (
    <div className="header_container ui">
      <div className="header_grid two">
        <div className="exact_date kk">
          <h2 className="date maha">Location</h2>
        </div>

        <div className="header_sub ty">
          <p className="header_p">
            Saturday, March 21st, 2026
          </p>
        </div>

        <div className="header_sub jur">
          <div className="image-wrappers">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3d/ce/29/cathedral-basilica-of.jpg?w=700&h=400&s=1"
              alt="Cathedral Basilica of the Sacred Heart"
              className="r_img nanaa"
            />
          </div>
        </div>

        <div className="header_sub ty">
          <p className="header_p">
            Cathedral Basilica of the Sacred Heart
            <br />
            Newark, New Jersey
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="naughty plyan">
        <div className="naughty_sub">
          <p className="header_p bos">
            Saturday, March 21st, 2026
          </p>
        </div>

        <div className="naughty_sub">
          <p className="header_p boss">
            Cathedral Basilica of the Sacred Heart
            <br />
            Newark, New Jersey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
