# Harness React FF Sample

Sample React app with Harness feature flags.

## Config

### 1. Update `config.js`

For this example, the `SDK_KEY` and `IDENTIFIER` are stored in `src/config.js`. The SDK key can be generated in the Harness UI and the Identifier can be any value you choose.

The `SDK_KEY` is a public key that points to a specific Environment within Harnes (e.g., `dev`) and the settings for all the flags within that environment.

- In a non-sample app the `SDK_KEY` would typically be supplied as a build or environment variable
- `SDK_KEY` is generated in the `Environments` tab in the Harness UI.
- There can be multiple SDK keys per environment. SDK keys can be public facing.

The `IDENTIFIER` uniquely identifies a Target within Harness.

- A Target can be an end-user, a machine, an IP address, ect.
- The Identifier can be populated using an email address, user's Id, a hashed user identifier, an IP address, ect.

### 2. Run locally

After updating the values in `src/config.js`, use npm to start the app.

```bash
npm i
npm start
```

## Custom Hooks

This uses two SDK clients for example purposes:

- One directly in the `FFContainer` component (`src/components/ffContainer/FFContainer.js`)
- A React Hook example that return the evaluation of a single flag (`src/components/hooks/useFeatureFlag.js`)

Consuming hook:

```js
const sampleFlag = useFeatureFlag("sampleFlag", "defaultValue");
```

The `useFeatureFlag()` hook takes two arguments:

1. The name of feature flag in Harness (the corresponding flag must be created in Harness)
2. The default, fallback value
