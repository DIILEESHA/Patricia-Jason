import "./cc.css";
import alex from "../../assets/Alex.webp";
import ashley from "../../assets/Ashley.webp";
import carla from "../../assets/Carla.webp";
import cyrus from "../../assets/Cyrus.webp";
import danielle from "../../assets/Danielle.webp";
import gaston from "../../assets/Gaston.webp";
import joshua from "../../assets/Joshua.webp";
import kevin from "../../assets/Kevin.webp";
import lauren from "../../assets/Lauren.webp";
import leeann from "../../assets/Leeann.webp";
import temika from "../../assets/Temieka.webp";
import zach from "../../assets/Zach.webp";

const weddingParty = [
  { name: "Ashley Wanamaker", role: "Maid of Honor", img: ashley },
  { name: "Carla Gantt", role: "Maid of Honor", img: carla },
  { name: "Temieka Brown", role: "Bridesmaid", img: temika },
  { name: "Lauren Johnson", role: "Bridesmaid", img: lauren },
  { name: "Leeann Johnson", role: "Bridesmaid", img: leeann },
  { name: "Danielle Stamp", role: "Bridesmaid", img: danielle },
  { name: "Joshua Johnson", role: "Best Man", img: joshua },
  { name: "Cyrus Ramos", role: "Best Man", img: cyrus },
  { name: "Alexander McLeod", role: "Groomsman", img: alex },
  { name: "Gaston Jeremiah", role: "Groomsman", img: gaston },
  { name: "Kevin Matthew", role: "Groomsman", img: kevin },
  { name: "Zachary Thomas", role: "Groomsman", img: zach },
];


const Couple = () => {
  return (
    <div className="faq_container">
      <div className="faq_cover mosiya">
        <h2 className="faq_title">Wedding Party</h2>
      </div>

      <div className="couple_grid">
        {weddingParty.map((member, index) => (
          <div key={index} className="couple_sub_grid">
            <img src={member.img} alt={member.name} className="couple_img" />
            <h2 className="person_name">{member.name}</h2>
            <p className="person_role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Couple;
