import React from "react";
import "./ourstory.css";
import as from "../../src/assets/a1.jpeg"
import asd from "../../src/assets/a2.jpeg"
import asdd from "../../src/assets/couple5.jpeg"
const OurStory = () => {
  return (
    <div className="story-container">
      {/* Section Header */}
      <div className="faq_cover dalsi">
        <h2 className="faq_title">Our Story</h2>
        <p className="story_intro psha">
          Love wasn’t in the care plan — but it found its way anyway.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="story-timeline grid-timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-content animate-left">
            <div
              className="timeline-image"
             
            >
<img className="suix" src={as} alt="" />

            </div>

            <div className="timeline-text">
              <h2 className="timeline-title">How We Met</h2>
              <div className="timeline-date">2017</div>
              <div className="timeline-body">
                <p>
                  What began as a simple friendship turned into something
                  neither of us expected—but everything we needed.
                </p>
                <p>
                  We met at work, where days were filled with conversations,
                  teamwork, and shared moments that slowly built a foundation of
                  trust and understanding.
                </p>
                <p>
                  There was no rush—just two people showing up, supporting each
                  other, and learning what it meant to grow side by side.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-dot nasi"></div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-content animate-right">
            <div
              className="timeline-image"
              
            >

<img className="suix" src={asd} alt="" />

            </div>

            <div className="timeline-text">
              <h2 className="timeline-title">From Friendship to Love</h2>
              <div className="timeline-date">2019</div>
              <div className="timeline-body">
                <p>
                  Over time, friendship bloomed into love. In 2019, we chose
                  each other with intention and purpose.
                </p>
                <p>
                  We built something steady, intentional, and real—rooted in
                  respect, laughter, and patience.
                </p>
                <p>
                  Our love wasn’t about grand gestures, but about the quiet
                  certainty that life is better when built together.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-dot pasi"></div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-content animate-left">
            <div
              className="timeline-image nalagiri"
              
            >
<img className="suix" src={asdd} alt="" />


            </div>

            <div className="timeline-text">
              <h2 className="timeline-title">Our Next Chapter</h2>
              <div className="timeline-date">Forever</div>
              <div className="timeline-body">
                <p>
                  After taking our time and growing as individuals and as a
                  team, we knew we were ready for the next chapter.
                </p>
                <p>
                  With the same love, purpose, and partnership that brought us
                  here, we’re excited to celebrate a future built on friendship,
                  commitment, and unwavering support.
                </p>
                <p>
                  Jason and Patricia have been inseparable ever since—and this
                  is just the beginning.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-dot nasi"></div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
