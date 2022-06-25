import "./App.css";
import FFContainer from "./components/ffContainer/FFContainer";
import config from "./config.json";

const attributeList = {
  host: window.location.href,
  lastUpdate: Date(),
};

function App() {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Feature Flag React Sample</h1>
      <br />
      <FFContainer
        sdkKey={process.env.REACT_APP_HARNESS_FF_SDK_KEY}
        identifier={process.env.REACT_APP_IDENTIFIER}
        attributes={config.ATTRIBUTES ? attributeList : {}}
      />
    </div>
  );
}

export default App;
