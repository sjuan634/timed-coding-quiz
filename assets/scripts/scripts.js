let timeEl = document.getElementById("time");
let timeLeft = 90;

let questtion1 = {
  question: "Which of the following is NOT a data type?",
  option1: "Boolean",
  option2: "String",
  option3: "Array",
  correctAnswer: "Variable"
}

let questtion2 = {
  question: "Question 2?",
  option1: "Option 1",
  option2: "Option 2",
  option3: "Option 3",
  correctAnswer: "Correct Answer"
}

let questtion3 = {
  question: "Question 3?",
  option1: "Option 1",
  option2: "Option 2",
  option3: "Option 3",
  correctAnswer: "Correct Answer"
}

let questtion4 = {
  question: "Question 4?",
  option1: "Option 1",
  option2: "Option 2",
  option3: "Option 3",
  correctAnswer: "Correct Answer"
}

let questtion5 = {
  question: "Question 5?",
  option1: "Option 1",
  option2: "Option 2",
  option3: "Option 3",
  correctAnswer: "Correct Answer"
}

// setTime ();

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = "Total: " + timeLeft;

    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      allDone();
    }

  }, 1000);
}

// Function to display all done
function allDone() {
  timeEl.textContent = " ";
}