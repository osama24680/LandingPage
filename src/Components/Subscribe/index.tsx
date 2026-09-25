import "./index.scss";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
const Subscribe = () => {
  return (
    <section id="Subscribe">
      <div className="overlayLayer">
        <div className="container">
          <HeadLine
            head={data[7].head}
            paragraph={data[7].paragraph}
            color="white"
          />
          <form>
            <input type="email" name="email" placeholder="E-Mail Address" />
            <button>Download</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
