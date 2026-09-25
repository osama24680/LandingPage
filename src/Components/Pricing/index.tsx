import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
const Pricing = () => {
  return (
    <section id="Pricing">
      <div className="overlayLayer">
        <div className="container">
          <HeadLine
            head={data[5].head}
            paragraph={data[5].paragraph}
            color="white"
          />
          <div className="pricingCards">
            <div className="card">
              <p className="feature">Single</p>
              <p className="price">Free</p>
              <p className="description">
                All plans are include , People Search, and A/B Testing Report.
              </p>
              <button>get started</button>
            </div>
            <div className="card specialOffer">
              <p className="feature">Premium</p>
              <p className="price">19 $</p>
              <p className="description">
                All plans are include , People Search, and A/B Testing Report.
              </p>
              <button>get started now</button>
            </div>
            <div className="card">
              <p className="feature">Agency</p>
              <p className="price">29 $</p>
              <p className="description">
                All plans are include , People Search, and A/B Testing Report.
              </p>
              <button>get started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
