const env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          disableImportExportTransform:
            env === "production" && process.env["RNX_METRO_SERIALIZER_ESBUILD"],
        },
      ],
    ],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
    ],
  };
};
