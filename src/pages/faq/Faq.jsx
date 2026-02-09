import React, { useState } from "react";
import "./faq.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Modal, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import drinkmenu from "../../assets/bar.jpg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = drinkmenu;
    link.download = "wedding-drink-menu.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const faqs = [
    {
      category: "Ceremony & Timing",
      questions: [
        {
          question: "When should I arrive to the wedding ceremony?",
          answer:
            "We request that guests arrive to the Cathedral Basilica of the Sacred Heart no later than 12:15pm, as the wedding ceremony will start promptly at 12:30pm.",
        },
      ],
    },
    {
      category: "Dress Code",
      questions: [
        {
          question: "What is the dress code?",
          answer: (
            <>
              <p>
                <strong>Formal Attire</strong>
              </p>
              <p>
                This celebration will follow a Formal / Black Tie dress code. We
                invite our guests to dress elegantly for an evening of timeless
                sophistication.
              </p>

              <button className="rsvp_btn">
                <a className="aa" href="/dress">Explore Dress Code & Style Tips</a>
              </button>
            </>
          ),
        },
      ],
    },
    {
      category: "Parking Information",
      questions: [
        {
          question: "Is there parking at the wedding ceremony?",
          answer: (
            <>
              <p>Yes, the Cathedral Basilica has several options:</p>
              <ul>
                <li>A parking lot behind the property on Ridge Street.</li>
                <li>
                  A parking lot at the Archdiocesan Center (171 Clifton Avenue).
                </li>
                <li>Street parking.</li>
              </ul>
              <p>
                <em>
                  Please note: No parking is allowed at the Barringer High
                  School Lot across the street from the Cathedral.
                </em>
              </p>
            </>
          ),
        },
        {
          question: "Is there parking at The Rockleigh?",
          answer: "Yes, The Rockleigh reception venue has a parking lot.",
        },
      ],
    },
    {
      category: "Accommodations",
      questions: [
        {
          question: "Is there a preferred hotel if I need it?",
          answer: (
            <>
              <p>
                The Crowne Plaza Englewood will have a special rate of
                $154/night on March 20 and March 21.
              </p>
              <p>
                Please book by <strong>February 27</strong> to receive this
                rate. Reservations received after this date will be accepted on
                an availability basis.
              </p>
              <a
                href="https://www.crowneplaza.com/redirect?path=hd&brandCode=CP&localeCode=en&regionCode=1&hotelCode=engnj&_PMID=99801505&GPC=WJW&cn=no&viewfullsite=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to book your room
              </a>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="faq_container">
      <div className="faq_cover">
        <h2 className="faq_title">Frequently Asked Questions</h2>
      </div>

      <div className="faq_card_section">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq_category">
            <h3 className="faq_category_title">{category.category}</h3>

            {category.questions.map((faq, qIndex) => {
              const id = `${catIndex}-${qIndex}`;
              return (
                <div className="faq_sub_card" key={id}>
                  <div className="faq_top" onClick={() => toggleAccordion(id)}>
                    <div className="faq_top_t">
                      <h2 className="faq_qs">{faq.question}</h2>
                    </div>
                    <div className="faq_top_t">
                      {activeIndex === id ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>

                  <div className="line"></div>

                  {activeIndex === id && (
                    <div className="faq_ans">
                      <div className="faq_ans_p">{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Drink Menu Modal */}
      <Modal
        title="Wedding Drink Menu"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="download"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
          >
            Download Menu
          </Button>,
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width={800}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={drinkmenu}
            alt="Drink Menu"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <p style={{ marginTop: "20px" }}>
            Our curated selection of beverages for your enjoyment!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Faq;
