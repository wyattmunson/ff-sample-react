import { useState, useEffect } from "react";
import { initialize, Event } from "@harnessio/ff-javascript-client-sdk";

const useFeatureFlag = (flagName, defaultValue) => {
  const [featureFlags, setFeatureFlags] = useState({});

  useEffect(() => {
    const cf = initialize(process.env.REACT_APP_HARNESS_FF_SDK_KEY, {
      identifier: process.env.REACT_APP_IDENTIFIER,
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
  }, []);

  /**
   * Add custom logic to hook
   * Catch errors, return defaults, format response
   *
   */

  // if FF fail to load, fall back to default
  if (Object.keys(featureFlags).length === 0) return defaultValue;

  if (!featureFlags[flagName]) {
    console.log("NOT FOUND");
    return defaultValue;
  }

  console.log(featureFlags[flagName]);

  return featureFlags[flagName];
};

export default useFeatureFlag;
