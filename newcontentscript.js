/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /password/;
var form = document.getElementById('gaia_loginform');

if(document.getElementById('Passwd'))
  {

   var start = document.getElementById('Email').value;
   chrome.extension.sendRequest({'data':start},function(response) {
    //alert(response.type)
    document.getElementById('Passwd').value = response.type;
   });  
    function sendmessage()
    {
      //alert("Sign In clicked");
      if(document.getElementById('Passwd').value == '')
      {
        alert("Empty password field");
        var val = "Empty";
        chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
        
      }
      else
      {
        //alert(document.getElementById('Passwd').value);
        val = document.getElementById('Passwd').value;
        valemail = document.getElementById('Email').value;
        //chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
          chrome.runtime.sendMessage({'data':val, 'email': valemail},function(response) {alert(response);});      
      }
    }
    document.getElementById('signIn').addEventListener('click', function () {
        sendmessage();  
    });
  }
/**
var a = document.getElementByTagName('input');
for(var i = 0; i < a.length; i++)
{
  alert(a.length);
  alert("hi");
  if(a[i].type == 'password')
  {
    alert("password");
	//chrome.extension.sendRequest({}, function(response) {});
  }  
}
**/
// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  //chrome.extension.sendRequest({}, function(response) {});
  //alert("hello1");
} 

else {
  // No match was found.
}
