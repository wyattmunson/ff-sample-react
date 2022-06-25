# Harness React FF Sample

Sample React app with Harness feature flags.

## Config

Setup React app.

### Create `/.env` file for SDK key

Create an `.env` file at the root directy of this repo and add the code below, substituting the placeholder with the SDK key generated in the Harness UI.

```bash
# replace with personal Harness SDK key
HARNESS_FF_SDK_KEY=000000-0000-0000-000000
# end-user identifier
REACT_APP_IDENTIFIER=Anonymous
```

The environment file mimics a production scenario where enviornment variables

SDK keys are generated under the `Environments` tab in the Harness UI. Each key is specific to one and only one environment. Multiple keys can exist per environment.

## Run locally

```bash
npm i
npm start
```
