var index = 0;
var start = 0;
var finish = 0;
var greeting = 'Hi, I am ' + name + ',' + myProjects;
var name = 'Kate ';
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
