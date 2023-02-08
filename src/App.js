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
        // SDK_KEY is a public key that points to an Environment
        // In production this would be a build or environment variable
        sdkKey={config.SDK_KEY}
        // IDENTIFIER maps to a Target
        // A Target can be an end-user, a machine, an IP address, ect.
        identifier={config.IDENTIFIER}
        // ATTRIBUTES are optional, additional information about a Target
        // Attributes are a key-value pair of metadata
        // Attributes can include, IP address, geo info, ect.
        attributes={config.ATTRIBUTES ? attributeList : {}}
      />
    </div>
  );
}

export default App;
