import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./rsvp.css";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attendingWedding: "",
    attendingReception: "",
    heritage: "",
    bringingGuests: "no",
    guestType: "",
    guestCount: "1",

    // Transportation
    needChurchTransport: "no",
    churchTransportCount: "",

    needHotelTransport: "no",
    hotelTransportCount: "",

    submittedAt: new Date().toISOString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      alert("Thank you for your RSVP!");

      setFormData({
        fullName: "",
        attendingWedding: "",
        attendingReception: "",
        heritage: "",
        bringingGuests: "no",
        guestType: "",
        guestCount: "1",
        needChurchTransport: "no",
        churchTransportCount: "",
        needHotelTransport: "no",
        hotelTransportCount: "",
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
            Kindly RSVP by <strong>March 6th, 2026</strong>.
            <br /><br />
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

              {/* Wedding */}
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

              {/* Reception */}
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
                />
              </div>

              {/* Church Transport */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Do you need transportation from Church → Venue?
                </label>
                <select
                  name="needChurchTransport"
                  className="rsvp_input"
                  value={formData.needChurchTransport}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>

                {formData.needChurchTransport === "yes" && (
                  <input
                    type="number"
                    min="1"
                    name="churchTransportCount"
                    className="rsvp_input"
                    placeholder="How many people?"
                    value={formData.churchTransportCount}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>

              {/* Hotel Transport */}
              <div className="rsvp_inputer_section">
                <label className="rsvp_label">
                  Do you need transportation from Hotel → Church → Venue → Back to Hotel?
                </label>
                <select
                  name="needHotelTransport"
                  className="rsvp_input"
                  value={formData.needHotelTransport}
                  onChange={handleChange}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>

                {formData.needHotelTransport === "yes" && (
                  <input
                    type="number"
                    min="1"
                    name="hotelTransportCount"
                    className="rsvp_input"
                    placeholder="How many people?"
                    value={formData.hotelTransportCount}
                    onChange={handleChange}
                    required
                  />
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
