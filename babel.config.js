module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    //needs to be at the end all the time 
    plugins: ['react-native-reanimated/plugin'],
  };
};