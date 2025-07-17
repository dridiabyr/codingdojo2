function hide(element) {
  element.remove();
}
function score(element) {
  let currentScore = parseInt(element.innerText);
  element.innerText = currentScore + 1;
}

setTimeout(function(){
    alert('The ninja has won the game ') },13000)