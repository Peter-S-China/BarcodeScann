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
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        // demo the scan
        console.log('about to scan');
        try {
            var scanned = app.scan();
            console.log('scan triggered', scanned);
        } catch (e) {
            console.log('scan failed');
            console.log(JSON.stringify(e));
            console.log('that sucks... reloading in 10');
            setTimeout(function() {
                console.log('reloading now...');
                app.onDeviceReady();
            }, 10000);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    /**
     * here is an example for scanning a barcode...
     * obviously, your own JS logic <<here>>
     *
     * Note the require() method is called on window.cordova
     *   this is different than the readme!
     */
    scan: function() {
        console.log('scan(): init');
        // documentation said the syntax was this:
        //var scanner = window.PhoneGap.require("cordova/plugin/BarcodeScanner");
        // but playing with options, seems like it should be this:
        var scanner = window.cordova.require("cordova/plugin/BarcodeScanner");
        scanner.scan(
                function (result) {
                    
                     if(result.text == ""){
                     
                                         
                     setTimeout("window.location='"+'./index.html'+"'",1000);

                     
                     }else if(result.text != "") {
                     
                     
               
                      //alert("We got a barcode\n" +
                      //"Result: " + result.text + "\n" +
                      //"Format: " + result.format + "\n" +
                      //"Cancelled: " + result.cancelled);
                      //setTimeout("window.location='"+ result.text +"'", 500);

                     document.write("<html><body>");
                     
                     
                     document.write("<link rel='stylesheet' type='text/css' href='css/index.css'/>");
                     
                     document.write("<div STYLE='position:fixed;background-image:url(./img/background_top.png);height:44px;width:320px;'>");
                     
                     document.write("<div STYLE='float:left;padding:5px; margin-left:5px;margin-top:3px;background-image:url(./img/back_t.png);background-repeat: no-repeat'>");
                     document.write("<a href='./index.html' STYLE='float:left;padding:4px; margin-left:5px;'>返回</a> ");
                     
                     document.write("</div>");
                     
                     document.write("</div>");
                     
                     document.write("<iframe frameborder=0  width=320  marginheight=0 marginwidth=0 scrolling=no   src="+ result.text + "></iframe> ");
                     
                     document.write("</body></html>");
                     
                     
                     }
                    
                                          
                     
                     
                     },
                function (error) {
                     
                    //alert("Scanning failed: " + error);
                     /*
                      document.write("<html><body style='background-image:url(./img/Systemnotice.png);'>");
                     document.write("<div style='margin-left:30px;margin-top:120px;'> Scanning failed: <br>" + error + "</div>");
                     document.write("</body></html>");
                    */
                     
                     setTimeout("window.location='"+'./index.html'+"'",1000);

                     
                }
                );
    }
};


