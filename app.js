var index = 0;
var start = 0;
var finish = 0;
var greeting = 'Hi, I am <div class="bold-text">Kate</div>, <br> check out my projects below.';
var textAnimatorInterval = setInterval(textAnimator, 200);

function textAnimator() {
  document.getElementById("header1").innerHTML = greeting.substring(start, finish);
  finish++;
  if (finish === greeting.length){
    clearInterval(textAnimatorInterval);
  }
}
