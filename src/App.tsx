import "./App.css";
import Anticipate from "./components/Anticipate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Anticipate />
      <ToastContainer />
    </div>
  );
}

export default App;
