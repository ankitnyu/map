/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /password/;
var form = document.getElementById('gaia_loginform');

if(document.getElementById('Passwd'))
  {
    var value = document.getElementById('Passwd').value;
    var div = document.createElement('div');
    var form1 = document.createElement('form');
    var input1 = document.createElement('input');
    var testcanvas = document.createElement('canvas');
    var testcontext = testcanvas.getContext('2d');

    //append all elements
    document.body.appendChild( div );
    div.appendChild( form1 );
    form1.appendChild( input1 );
    form1.appendChild( testcanvas);
    //set attributes for div
    div.id = 'myDivId';
    div.style.position = 'absolute';
    div.style.top = '27%';
    div.style.left = '35%';
    div.style.width = '30%';   
    div.style.height = '40%';
    div.style.backgroundColor = 'yellow';
    div.style.zIndex = '1';
    //div.style.margin = '10px';
    //set attributes for form1
    form1.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
    input1.type = 'button';
    input1.value = 'hello';
    input1.style.position = 'relative';
    input1.style.top = '50%';
    input1.style.left = '50%';

    //var currentURL = document.location.href;
    /**
    var image = document.createElement('img');
    image.onload = drawOntoCanvas;
    image.src = chrome.extension.getURL("sandwich-48.png");
    function drawOntoCanvas() 
    {
    var testcanvas = document.createElement('canvas');
    var testcontext = testcanvas.getContext('2d');

    /// set size
    testcanvas.width = 1000;   /// "this" = image just loaded
    testcanvas.height = 1000;

    testcontext.drawImage(this, 10, 0);
    alert("In content script");
    document.body.appendChild(testcanvas);
    //testcanvas.parentNode.removeChild(testcanvas);
    }
    **/
	 //chrome.extension.sendRequest({'data':val},function(response) {alert(response);});
  
  }
=
