// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when a message is passed.  We assume that the content script
// wants to show the page action.
var gb;
//var form = document.getElementById('gaia_loginform');

function onRequest(request, sender, sendResponse) {
  // Show the page action for the tab that the sender (content script)
  // was on.
  /**
  switch (request.name) {
         case 'form_submit':
             var data = request.data;
             alert("hi");
             // do something with your form credentials.
             break;
     }
  **/
  chrome.pageAction.show(sender.tab.id);
  gb = sender.tab.id;
  if(request.data != '')
  {
      //alert("Null");
      localStorage["password"] = request.data;
      sendResponse('password field found :'+request.data);
  }
  else
  {
      alert("Empty Password field");
      sendResponse('password field found :'+request.data);
  }
  //sendResponse('password field found :'+request.data);

};
function doSomething()
{
  //alert("Icon clicked");

  chrome.tabs.executeScript( { file: 'contentscript.js' } );

  //chrome.tabs.executeScript( { file: 'new.js' } );
  //chrome.pageAction.setpopup({
    //tabid: gb,
    //default_popup: "popup.html"
  //});
}
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
chrome.pageAction.onClicked.addListener(doSomething);