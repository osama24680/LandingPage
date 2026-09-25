import "./index.scss";
import { GrGroup } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLock, CiAlarmOn, CiStar } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import HeadLine from "../UI/HeadLine";
import { data } from "../../Data";
const Benefits = () => {
  return (
    <section id="benefitsSection">
      <div className="container">
        <HeadLine
          head={data[0].benefitsHead}
          paragraph={data[0].benefitsParagraph}
        />
        <div className="benefitsItems">
          <div className="item">
            <GrGroup />
            <h3>Stay Connected</h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
          <div className="item">
            <IoSettingsOutline />

            <h3>Easy Unlock </h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
          <div className="item">
            <CiLock />

            <h3>Secure Data</h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
          <div className="item">
            <CiAlarmOn />
            <h3>Save Your Time</h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
          <div className="item">
            <CiStar />
            <h3>High Rating</h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
          <div className="item">
            <RxUpdate />
            <h3>Free Updates</h3>
            <p>
              Appy impresses you with fully responsiveness and highly
              customization. We did it in combination of very clean and flexible
              design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
