var index = 0;
var start = 0;
var finish = 0;
var greeting = 'Hi, I am';
var name = 'Kate';
var myProjects = 'check out my projects below.';
var smallerText = 'I am glad to have you visit this rather minimalistic space of mine.';


var textAnimatorInterval = setInterval(textAnimator, 150);

function textAnimator() {
  document.querySelector("#textBeforeNameElem").innerHTML = greeting.substring(start, finish+1);
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
