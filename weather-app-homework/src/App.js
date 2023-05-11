import "./App.css";
import { MainContext } from "./context/Context";
import Form from "./components/Form";
import Info from "./components/Info";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState([]);
  const [city, setCity] = useState("");
  console.log(info);

  const data = {
    info,
    setInfo,
    city,
    setCity,
  };
  return (
    <MainContext.Provider value={data}>
      <div className="appDiv">
        <Form />
        <br />
        <Info />
      </div>
    </MainContext.Provider>
  );
}

export default App;
