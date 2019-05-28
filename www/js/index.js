/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {


    requiredFeatures: ["2d_tracking", "geo"],
    arExperienceUrl: "www/wikitude_experiences/" + "05_InstantTracking_2_3dModelOnPlane" + "/index.html",
    isDeviceSupported: false,
    startupConfiguration:
    {
        "camera_position": "back"
        
    },

    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // document.getElementById("buttonVideo").addEventListener("click", app.startVideo);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        document.getElementById("buttonWikitude").addEventListener("click", app.startAR);
        document.getElementById("buttonVideo").addEventListener("click", app.startVideo);
    },

    startAR: function () {
        // alert('wikitude button clicked')
        app.wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
        app.wikitudePlugin.isDeviceSupported(app.onDeviceSupported, app.onDeviceNotSupported, app.requiredFeatures);
    },

    startVideo: function () {
        // alert('video button clicked')

        let video = document.createElement('video');
        video.src = 'https://res.cloudinary.com/www-yoobic-com/video/upload/v1539183619/eg1tuxavudpls1hz3tsf.mp4';
        video.autoplay = true;
        document.body.appendChild(video);
    },
    

    onJSONObjectReceived: function (jsonObject) {
        console.log("Received", JSON.stringify(jsonObject));
        if ('closeWikitudePlugin' == jsonObject.action) {
            console.log("console.log : close");
            app.wikitudePlugin.close();
        } 
        else {
            alert('ARchitect => Cordova ' + jsonObject.action);
        }

    },


    onDeviceSupported: function () {
        app.wikitudePlugin.setJSONObjectReceivedCallback(app.onJSONObjectReceived)

        app.wikitudePlugin.loadARchitectWorld(

            () => {},
            app.onARExperienceLoadError,
            app.arExperienceUrl,
            app.requiredFeatures,
            app.startupConfiguration
        );
    },

    // Callback if the device does not support all required features
    onDeviceNotSupported: function (errorMessage) {
        alert(errorMessage);
    },
    // Callback if your AR experience loaded successful
    onARExperienceLoadedSuccessful: function (loadedURL) {
        // ... do something when the augmented reality experience finished loading
    },
    onARExperienceLoadError: function (errorMessage) {
        alert('Loading AR web view failed: ' + errorMessage);
        // ... react on failures. That could be happen when the local path is wrong or the remote url returned an error code
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();