# wikitude-cordova-bug

2 plugins added to sample app:
- wikitude-cordova-plugin installed locally from `_plugins` folder
- cordova-plugin-ionic-webview

Within the app:
- `Video` button to launch a video.js element
- `Wikitude` Button to launch Wikitude experience

Within the Wikitude experience:
- `Close AR` button to close Wikitude AR experience 

## To reproduce bug :
1. start app
2. click on `Video` button (each click creates a video element and plays it)
3. click on `Wikitude` to launch AR experience
4. click on `Close AR` button to go back to home screen (or swipe the screen right to close experience)
5. click on `Video` button -> **video will not launch anymore**
