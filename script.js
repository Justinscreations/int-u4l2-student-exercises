let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");


let buttonTwo = document.querySelector(".button-two");
let captionTwoElem = document.querySelector(".caption-two");

buttonOne.addEventListener("click", function() {
let spidyCaption = document.querySelector(".comment-one").value;



    // 2. Display the variable spidyCaption to captionOne.
    captionOne.innerHTML = spidyCaption

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.{
buttonTwo.addEventListener("click", function(){
    let kermitCaption = document.querySelector(".comment-two").value; 
    captionTwoElem.innerHTML = kermitCaption




})