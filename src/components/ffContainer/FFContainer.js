import React, { useState, useEffect } from "react";
import { initialize, Event } from "@harnessio/ff-javascript-client-sdk";

const FFContainer = ({ sdkKey, identifier, attributes }) => {
  const [featureFlags, setFeatureFlags] = useState({});

  useEffect(() => {
    console.log("length", sdkKey.length);
    console.log("running ff init");
    const cf = initialize(sdkKey, {
      identifier: identifier,
      attributes: attributes,
    });

    cf.on(Event.READY, (flags) => {
      setFeatureFlags(flags);
    });

    cf.on(Event.CHANGED, (flagInfo) => {
      if (flagInfo.deleted) {
        setFeatureFlags((currentFeatureFlags) => {
          delete currentFeatureFlags[flagInfo.flag];
          return { ...currentFeatureFlags };
        });
      } else {
        setFeatureFlags((currentFeatureFlags) => ({
          ...currentFeatureFlags,
          [flagInfo.flag]: flagInfo.value,
        }));
      }
    });

    return () => {
      cf.close();
    };
    // }
  }, [attributes, sdkKey, identifier]);

  return (
    <div className="">
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">SDK Key</h5>
          <p>{sdkKey}</p>
          <h5 className="card-title">Identifier</h5>
          <p>{identifier}</p>
          <h5 className="card-title">Feature Flags</h5>
          <pre>{JSON.stringify(featureFlags, null, 2)}</pre>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default FFContainer;
