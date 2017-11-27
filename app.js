var index = 0;
var start = 0;
var finish = 0;

var greeting = "Hi, I'm Kate,";

setInterval(textAnimator, 200);

function textAnimator() {
  document.getElementById("header1").innerHTML = greeting.substring(start, finish);
  finish++;
}
