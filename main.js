// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const articleHearts = document.getElementsByClassName("like-glyph")

// Your JavaScript code goes here!
function likeCallback(event) {
  const heart = event.target;
  mimicServerCall("someString")
    .then(function () {
      if (heart.innerText === EMPTY_HEART){

        heart.innerText = FULL_HEART;
        heart.className = "activated-heart"

      } 
      else {
        heart.innerText = EMPTY_HEART;
      }
    }).catch(function (error) {

      const hider = document.querySelector(".hidden")
      hider.className= "";
      setTimeout(()=> hider.className= "hidden", 3000);
    })

}
for (const glyph of articleHearts){
  glyph.addEventListener('click', likeCallback)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
