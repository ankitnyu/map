
setTimeout(function() {
    /* Example: Send data to your Chrome extension*/
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        detail:'HELLO';
    }));
}, 0);
/**
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