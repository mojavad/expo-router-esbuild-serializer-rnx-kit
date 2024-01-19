// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const {
  MetroSerializer,
  esbuildTransformerConfig,
} = require("@rnx-kit/metro-serializer-esbuild");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.serializer = {
  customSerializer: MetroSerializer(undefined, {
    target: "es6",
  }),
};

config.transformer = esbuildTransformerConfig;

module.exports = config;
