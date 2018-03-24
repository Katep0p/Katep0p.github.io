var index = 0;
var start = 0;
var finish = 0;
var greeting = 'Hi, I am ' + name.bold() + '.' + smallerText;
var name = 'Kate';

var smallerText = '<br> I am glad to have you visit this rather minimalistic space of mine.' + myProjects;


var myProjects = '<br> check out my projects below.';
var textAnimatorInterval = setInterval(textAnimator, 150);

function textAnimator() {
  document.getElementById("header1").innerHTML = greeting.substring(start, finish);
  finish++;
  if (finish === greeting.length){
    clearInterval(textAnimatorInterval);

  }
}
//
//function textAnimator() {
  //document.getElementById("paragraph1").innerHTML = smallerText.substring(start, finish);
//  finish++;
  //if (finish === smallerText.length){
  //  clearInterval(textAnimatorInterval);

  //}
//}
