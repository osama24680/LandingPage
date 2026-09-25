import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
import appStore from "../../assets/appstore.png";
import playStore from "../../assets/playstore.png";
import phonesLayers from "../../assets/2-layers.png";
const Download = () => {
  return (
    <section id="Download">
      <div className="container">
        <HeadLine head={data[6].head} paragraph={data[6].paragraph} />
        <div className="appleAndroid">
          <img src={appStore} alt="appStore" />
          <img src={playStore} alt="playStore" />
        </div>
        <div className="phonesLayers">
          <img src={phonesLayers} alt="appStore" />
        </div>
      </div>
    </section>
  );
};

export default Download;
