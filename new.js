function sendmessage()
{
  alert(document.getElementById('passwd-in').value+' :In new.js');
  var passwd = document.getElementById('passwd-in').value;
 //console.log("Hello1");
  chrome.runtime.sendMessage("response",function(response) {alert(response);});
  //chrome.tabs.executeScript( { file: 'contentscript.js' } );
  //window.close();
  //chrome.windows.create({ url: 'http://www.google.com', type: 'panel' });
}


document.getElementById('clickMe').addEventListener('click', function () {

  sendmessage();
});
/**
setTimeout(function() {
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        detail:'HELLO';
    }));
}, 0);
function myFunction(){
//var Passwd-in = document.getElementById('Passwd-in'),
//form = document.querySelector('form');
alert("inside new.js");
function valueChanged(passwdvalue)
{
  Passwd-in.innertext = passwdvalue;
}

form.addEventListner('submit', function(evt)){
  var  value = Passwd-in.value;
  chrome.storage.sync.set({"myValue": value, "timestamp":Date.now()}, function() {
      console.log("setting myValue to "+value);
    });
    alert("submitted"),
    evt.preventDefault();
});
chrome.storage.onChanged.addListner(function(changes, namespace){
  if(changes.myValue){
    valueChanged(changes.myValue.newvalue);
  }
});


}
**/