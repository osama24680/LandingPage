import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

interface IProps {}
const App = ({}: IProps) => {
  return (
    <div className="">
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
