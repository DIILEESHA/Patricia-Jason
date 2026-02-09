import "./vh.css";
import Nav from "../nav/Nav";
import halo1 from "../../assets/couple1.webp";
import halo2 from "../../assets/couple2.webp";
import halo3 from "../../assets/couple3.jpeg";

import React from "react";

const Vheader = () => {
  // Array of all 11 halo images
  const haloImages = [halo1, halo2, halo3];
  
  // Auto slider state
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Auto change image every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % haloImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <Nav /> */}
      <div className="vheader_grid">
        <div className="namess">
          <h2 className="v_couple">Patricia & Jason</h2>
        </div>
        
        {/* Auto Image Slider */}
        <div className="vheader_sub">
          <div className="image-slider">
            {haloImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                className={`vheader_image ${index === currentIndex ? 'active' : ''}`}
                alt={`Wedding ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vheader;