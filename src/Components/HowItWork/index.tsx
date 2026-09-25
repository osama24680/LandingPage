import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
import iphone from "../../assets/iphone.png";
const HowItWork = () => {
  return (
    <section id="HowItWork">
      <div className="container">
        <HeadLine head={data[1].head} paragraph={data[1].paragraph} />
        <div className="howImage">
          <img src={iphone} alt="iPhone" />
        </div>
        <div className="howSteps">
          <div className="howStepsItem">
            <div className="howNumber">1</div>
            <div className="howDescription">
              <h3>Download app</h3>
              <p>
                After all, as described in Web Design Trends 2015 & 2016,
                vision.
              </p>
            </div>
          </div>
          <div className="howStepsItem">
            <div className="howNumber">2</div>
            <div className="howDescription">
              <h3>Install & sign up</h3>
              <p>
                Rounding up a bunch of specific designs and talking about the
                merits.
              </p>
            </div>
          </div>
          <div className="howStepsItem">
            <div className="howNumber">3</div>
            <div className="howDescription">
              <h3>Upload your images</h3>
              <p>
                At its core, every brand has something special to reveal
                something.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
