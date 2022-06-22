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
        sdkKey={config.SDK_KEY}
        identifier={config.IDENTIFIER}
        attributes={config.ATTRIBUTES ? attributeList : {}}
      />
    </div>
  );
}

export default App;
