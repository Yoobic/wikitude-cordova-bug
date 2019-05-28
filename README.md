# wikitude-cordova-bug


## App structure :

2 plugins added to Cordova HelloWorld sample app:
- wikitude-cordova-plugin installed locally from `_plugins` folder
- cordova-plugin-ionic-webview

Within the app:
- `Video` button to launch a video.js element
- `Wikitude` button to launch a Wikitude experience (`05_InstantTracking_2_3dModelOnPlane`)

Within the Wikitude experience:
- `Close AR` button to close Wikitude AR experience 

## To start repo :
``` 
git clone git@github.com:Yoobic/wikitude-cordova-bug.git
cd wikitude-cordova-bug 
mkdir _plugins
```
put Wikitude cordova plugin in `_plugin` folder and rename it `wikitude-cordova-plugin` (bug found with SDK versions 8.4 and 8.5, not tested with previous versions)

``` 
npm install
cordova platform add ios
cordova build ios
```
open xcode andd add provisionning profile `open platforms/ios/HelloCordova.xcodeproj/`

(**OPTIONAL**) add Wikitude SDK key to `wikitude-cordova-bug/platforms/ios/platform_www/plugins/com.wikitude.phonegap.WikitudePlugin/www/WikitudePlugin.js` (key not needed to reproduce bug)

connect your ios device and `cordova run ios --device` (or run app from xcode)

## To reproduce bug :
1. start app
2. click on `Video` button (each click creates a video element and plays it)
3. click on `Wikitude` to launch AR experience
4. click on `Close AR` button to go back to home screen (or swipe the screen right to close experience)
5. click on `Video` button -> **video will not launch anymore**
