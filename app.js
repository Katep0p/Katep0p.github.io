var index = 0;
var start = 0;
var finish = 0;
var greeting = 'Hi, I am';
var name = '<span class="bold-text">Kate</span>,';
var myOnlySolutionForThisComma = ",";
var myProjects = '<br> check out my projects below.';
var textAnimatorInterval = setInterval(textAnimator, 150);

function textAnimator() {
  document.getElementById("header1").innerHTML = greeting.substring(start, finish);
  finish++;
  if (finish === greeting.length){
    clearInterval(textAnimatorInterval);
  }
}
