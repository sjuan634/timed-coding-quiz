let timeEl = document.getElementById("time");
let mainEl = document.querySelector(".container")

let timeLeft = 0;
let timerInterval;

let questions = [
  {
    question: "Which of the following is NOT a data type?",
    answers: ["Boolean", "String", "Array", "Variable"],
    correctAnswer: "Variable"
  },
  {
    question: "Question 2?",
    answers: ["Option 2-1", "Option 2-2", "Option 2-3", "Correct Answer 2"],
    correctAnswer: "Correct Answer 2"
  },
  {
    question: "Question 3?",
    answers: ["Option 3-1", "Option 3-2", "Option 3-3", "Correct Answer 3"],
    correctAnswer: "Correct Answer 3"
  },
  {
    question: "Question 4?",
    answers: ["Option 4-1", "Option 4-2", "Option 4-3", "Correct Answer 4"],
    correctAnswer: "Correct Answer 4"
  },
  {
    question: "Question 5?",
    answers: ["Option 5-1", "Option 5-2", "Option 5-3", "Correct Answer 5"],
    correctAnswer: "Correct Answer 5"
  }
];

timeEl.textContent = "Total: " + timeLeft;

init();

function init() {
  let h1Title = document.createElement("h1");
  h1Title.textContent = "Timed Coding Quiz";
  mainEl.appendChild(h1Title);
  
  let pInstructions = document.createElement("p");
  pInstructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds.";
  mainEl.appendChild(pInstructions);

  let startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  mainEl.appendChild(startButton);
}

let startButton = document.querySelector("button");

function startQuiz() {
  // mainEl.children.style.display = "none";
  setTime();
  setupQuestion();
}

startButton.addEventListener("click", startQuiz);

function setTime() {
  timeLeft = 60;
  timerInterval = setInterval(function() {
    timeEl.textContent = "Total: " + timeLeft;
    timeLeft--;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      allDone();
    }

  }, 1000);
}



function setupQuestion() {
  var i = 0;
  for (i; i < questions.length; i++) {
    let questionEl = document.createElement("h2");
    questionEl.textContent = questions[i].question;
    mainEl.appendChild(questionEl);

    let optionList = document.createElement("ol");
    mainEl.appendChild(optionList);

    var x = 0;
    for (x; x < questions[i].answers.length; x++) {
      let option = document.createElement("li");
      option.textContent = questions[i].answers[x];
      optionList.appendChild(option);
    }
  }
}

function allDone() {
  timeEl.textContent = " ";
}