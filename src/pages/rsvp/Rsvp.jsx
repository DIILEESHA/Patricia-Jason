import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./rsvp.css";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attendingWedding: "",
    attendingReception: "",
    transportationNeeded: "",
    transportFrom: [],
    heritage: "",
    bringingGuests: "no",
    guestType: "",
    guestCount: "1",
    message: "",
    submittedAt: new Date().toISOString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        transportFrom: checked
          ? [...prev.transportFrom, value]
          : prev.transportFrom.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "rsvps"), formData);
      alert("Thank you for your RSVP!");
      setFormData({
        fullName: "",
        attendingWedding: "",
        attendingReception: "",
        transportationNeeded: "",
        transportFrom: [],
        heritage: "",
        bringingGuests: "no",
        guestType: "",
        guestCount: "1",
        message: "",
        submittedAt: new Date().toISOString(),
      });
    } catch (error) {
      alert("Error submitting RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rsvp">
      <div className="details_rsvps">
        <div className="rsvpier">
          <h2 className="rsvp_ttle">RSVP</h2>

          <p className="rsvp_p">
            Kindly RSVP by <strong>March 6th, 2026</strong>.<br />
            <br />
            To honor the diverse backgrounds of our families and friends, we
            will be providing flags for our guests. Please indicate the country
            or heritage you wish to represent.
            <br />
            <br />
            Shuttle transportation will be provided between the hotel, church,
            and venue.
          </p>
          <div className="form_area">
            <form onSubmit={handleSubmit} className="rsvp_form">
              {/* Guest Name */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">Guest Name(s)</label>
                <input
                  type="text"
                  className="rsvp_input"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Wedding RSVP */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Will you attend the Wedding Ceremony?
                </label>
                <select
                  name="attendingWedding"
                  className="rsvp_input"
                  value={formData.attendingWedding}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Reception RSVP */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Will you attend the Reception?
                </label>
                <select
                  name="attendingReception"
                  className="rsvp_input"
                  value={formData.attendingReception}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Heritage */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Country / Heritage you wish to represent
                </label>
                <input
                  type="text"
                  className="rsvp_input"
                  name="heritage"
                  value={formData.heritage}
                  onChange={handleChange}
                  placeholder="e.g. Italy, Ireland"
                />
              </div>

              {/* Transportation */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Will you need transportation?
                </label>
                <select
                  name="transportationNeeded"
                  className="rsvp_input"
                  value={formData.transportationNeeded}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {formData.transportationNeeded === "yes" && (
                  <div className="attendance_options">
                    <label>
                      <input
                        type="checkbox"
                        value="hotel"
                        onChange={handleChange}
                      />{" "}
                      From Hotel
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="church"
                        onChange={handleChange}
                      />{" "}
                      From Church
                    </label>
                  </div>
                )}
              </div>

              {/* Guests */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Will you be bringing a plus one or children?
                </label>
                <select
                  name="bringingGuests"
                  className="rsvp_input"
                  value={formData.bringingGuests}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>

                {formData.bringingGuests === "yes" && (
                  <>
                    <select
                      name="guestType"
                      className="rsvp_input"
                      value={formData.guestType}
                      onChange={handleChange}
                    >
                      <option value="">Guest Type</option>
                      <option value="adult">Adult</option>
                      <option value="child">Child</option>
                    </select>

                    <input
                      type="number"
                      min="1"
                      name="guestCount"
                      className="rsvp_input"
                      value={formData.guestCount}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>

              {/* Message */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">Message for the couple</label>
                <textarea
                  className="rsvp_textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              <div className="rsvp_inputer_section">
                <button
                  type="submit"
                  className="submit_button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send RSVP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
