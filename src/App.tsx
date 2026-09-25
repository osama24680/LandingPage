import Benefits from "./Components/Benefits";
import Header from "./Components/Header";
import HowItWork from "./Components/HowItWork";
import Navbar from "./Components/Navbar";

interface IProps {}
const App = ({}: IProps) => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Benefits />
      <HowItWork />
    </div>
  );
};

export default App;
