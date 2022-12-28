/* 
Wireframing necessary functions for js:

-set up variables for the game
-function to generate/display the math problem
-double check for subtraction/division
-function to display the game problem to the user
-function to run the game
-function to check the answer
-update score for correct/incorrect answers
-add event listeners for all the buttons/selectors
-set up alert for win/lose

*/

// Set focus on answer input when the page loads
window.addEventListener("load", () => {
    document.getElementById("answer").focus();
  });