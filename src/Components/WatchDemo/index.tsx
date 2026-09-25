import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
import samsung from "../../assets/samsung.mp4";
const WatchDemo = () => {
  return (
    <section id="WatchDemo">
      <div className="overlayLayer">
        <div className="container">
          <HeadLine
            head={data[2].head}
            paragraph={data[2].paragraph}
            color="white"
          />
          <div className="videoWatch">
            <video controls>
              <source src={samsung} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchDemo;
