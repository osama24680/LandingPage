import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
const Screenshotss = () => {
  return (
    <section id="Screenshotss">
      <div className="container">
        <HeadLine head={data[3].head} paragraph={data[3].paragraph} />
        <div className="ScreenshotssImages">
          <img src={image1} alt="Screenshotss" />
          <img src={image2} alt="Screenshotss" />
          <img src={image3} alt="Screenshotss" />
          <img src={image4} alt="Screenshotss" />
        </div>
      </div>
    </section>
  );
};

export default Screenshotss;
