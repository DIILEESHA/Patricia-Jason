import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dress.css";

const DressCode = () => {
  const [activeIndex, setActiveIndex] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dressCodeSections = [
    {
      question: "Dress Code",
      answer: (
        <>
          <p className="dress-code-intro">
            This celebration will follow a <strong>Formal / Black Tie</strong>{" "}
            dress code. We invite our guests to dress elegantly for an evening
            of timeless sophistication.
          </p>
        </>
      ),
    },
    {
      question: "For Men",
      answer: (
        <>
          <div className="guideline-section">
            <ul className="kos">
              <li>Black tuxedo with bow tie</li>
              <li>Formal dark suit with tie or bow tie</li>
              <li>Polished dress shoes</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      question: "For Women",
      answer: (
        <>
          <div className="guideline-section">
            <ul className="kos">
              <li>Floor-length evening gown</li>
              <li>Elegant formal dress</li>
              <li>Refined heels or dressy footwear</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      question: "Color Consideration",
      answer: (
        <>
          <div className="color-section">
            <p>
              To maintain the elegance of the celebration, we kindly ask guests
              to refrain from wearing <strong>solid red attire</strong>.
            </p>
          </div>
        </>
      ),
    },
    {
      question: "Examples for Inspiration",
      answer: (
        <div className="inspiration-slider">
          <Slider {...sliderSettings}>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/fukH1FR.jpeg"
                alt="Black tie tuxedo"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/6OOQkLl.jpeg"
                alt="Formal black suit"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/nCYDv26.jpeg"
                alt="Elegant evening gown"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/W4nqcZU.jpeg"
                alt="Formal black tie look"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/w5w76TE.jpeg"
                alt="Black tie elegance"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/Y4e2Z9X.jpeg"
                alt="Evening formal wear"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/sZANsBe.jpeg"
                alt="Luxury black tie style"
              />
            </div>
            <div className="slide-item">
              <img
                src="https://i.imgur.com/BCE5zg7.jpeg"
                alt="Formal wedding attire"
              />
            </div>
          </Slider>
        </div>
      ),
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover mallika">
        <h2 className="faq_title" style={{ color: "#fff" }}>
          Dress Code: Formal / Black Tie
        </h2>
      </div>

      <div className="faq_card_section">
        {dressCodeSections.map((section, index) => (
          <div className="faq_sub_card" key={index}>
            <div className="faq_top" onClick={() => toggleAccordion(index)}>
              <div className="faq_top_t">
                <h2 className="faq_qs">{section.question}</h2>
              </div>
              <div className="faq_top_t">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>

            <div className="line"></div>
            {activeIndex === index && (
              <div className="faq_ans">
                <div className="faq_ans_p">{section.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressCode;
