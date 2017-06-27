# react-native-starter-pack

Yet another react native start pack, configured with
* redux
* redux-pack
* redux-thunk
* redux-logger
* redux-persist
* react-navigation
* eslint-config-airbnb
* flow

# Usage
1. Clone the project
  * If you like, delete the `.git` folder and run `git init` for a fresh copy without any history, or run git clone with `--depth 1`
1. Run `yarn` or `npm i`.
1. Rename the project [(reference)](http://blog.skypayjm.com/2016/07/renaming-react-native-project.html)
  1. Change name attribute in `package.json`
  1. `$ react-native upgrade`
  1. Overwrite the files when prompted
  1. Go into the index.ios.js and index.android.js and change the names like so:
    * From: AppRegistry.registerComponent('MyAppIOS', () => MyAppIOS);
    * To: AppRegistry.registerComponent('MyApp', () => MyApp);
  1. `$ rm -rf android/app/src/main/java/com/reactnativestarterpack`
  1. Change package name in `AndroidManifest.xml`
  1. Change app name in `strings.xml`
  1. `$ rm -rf ios/ReactNativeStarterPack*`

# Goal
* To minimize effort to initialize a React Native Project.
* To update the repo whenever React Native has new release.
* To update the repo whenever some common features are required in most of my projects.

# Disclaimers
This starter pack is tailored for personal usage, no support/warranty is provided.
