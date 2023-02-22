const questions = [
  {
    question: 'Which of the following is NOT a data type?',
    choices: ['boolean', 'string', 'array', 'variable'],
    answer: 'variable',
  },
  {
    question: 'What is the correct syntax for a for loop in JavaScript?',
    choices: ['for (i < 5; i++;)', 'for (i = 0; i < 5; i++)', 'for (i = 0; i++; i < 5)', 'for (i++; i < 5; i = 0)'],
    answer: 'for (i = 0; i < 5; i++)',
  },
  {
    question: 'What is the purpose of the "return" statement in a JavaScript function?',
    choices: [' to declare a variable', 'to stop the execution of a function and return a value', 'to start the execution of a function', 'to perform a comparison'],
    answer: 'to stop the execution of a function and return a value',
  },
  {
    question: 'What is the difference between "let" and "const" in JavaScript?',
    choices: ['"let" is used to declare constants, while "const" is used to declare variables.', '"let" is block-scoped, while "const" is function-scoped.', '"let" can be reassigned, while "const" cannot be reassigned.', '"let" is used for primitive types, while "const" is used for complex types.'],
    answer: '"let" can be reassigned, while "const" cannot be reassigned.',
  },
  {
    question: 'What is the difference between "==" and "===" operators in JavaScript?',
    choices: ['"==" performs type coercion, while "===" does not.', '"===" performs type coercion, while "==" does not.', '"==" is used for assignment, while "===" is used for comparison.', 'There is no difference between "==" and "===" in JavaScript.'],
    answer: '"==" performs type coercion, while "===" does not.',
  }
];

const startBtn = document.querySelector('#start-btn');
const startDiv = document.querySelector('#start-quiz');
const questionsDiv = document.querySelector('#questions');
const endDiv = document.querySelector('#end');
const feedbackDiv = document.querySelector('#feedback');
const choicesDiv = document.querySelector('#choices');
const submitBtn = document.querySelector('#submit');
const initialsEl = document.querySelector('#initials');
const timeEl = document.querySelector('#time');
const scoreEl = document.querySelector('#score');
const olEl = document.querySelector('#highscores');
const clearBtn = document.querySelector('#clear');
const viewHighscores = document.querySelector('#view-scores');
const scoresModal = document.querySelector('#scores-modal');

let questionIndex = 0;
let time = questions.length * 15;
let timer;

function clockTick() {
  time--;
  timeEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function startQuiz() {
  startDiv.classList.add('hidden');

  questionsDiv.classList.remove('hidden');

  timer = setInterval(clockTick, 1000);

  timeEl.textContent = time;

  renderQuestion();
};

function renderQuestion() {
  let question = questions[questionIndex];

  const questionEl = document.querySelector('#question');
  questionEl.textContent = question.question;

  choicesDiv.innerHTML = '';

  for (let i = 0; i < question.choices.length; i++) {
    let choice = question.choices[i];
    const choiceEl = document.createElement('button');
    choiceEl.setAttribute('class', 'block my-2 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2');
    choiceEl.setAttribute('value', choice);

    choiceEl.textContent = `${i + 1}. ${choice}`;

    choicesDiv.appendChild(choiceEl);
  };
};

function checkAnswer(e) {
  const answerSelected = e.target;

  if (answerSelected.value !== questions[questionIndex].answer) {
    time -= 15;

    if(time < 0) {
      time = 0
    };

    timeEl.textContent = time;

    feedbackDiv.textContent = 'Incorrect!';
  } else {
    feedbackDiv.textContent = 'Correct!';
  };

  feedbackDiv.classList.remove('hidden');
  setTimeout(function () {
    feedbackDiv.classList.add('hidden');
  }, 1000);

  questionIndex++;

  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  };
};

function endQuiz() {

  clearInterval(timer);

  questionsDiv.classList.add('hidden');
  endDiv.classList.remove('hidden');
  scoreEl.textContent = time;
};

function logScore(e) {

  const initials = initialsEl.value.trim();

  if (initials !== '') {
    const highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    const newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    printHighscores();

    scoresModal.classList.remove('hidden');
  };
};

function printHighscores() {
  let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (let i = 0; i < highscores.length; i += 1) {
    const liEl = document.createElement('li');
    liEl.textContent = `${highscores[i].initials} - ${highscores[i].score}`;

    olEl.appendChild(liEl);
  }
}

function clearHighscores() {
  window.localStorage.removeItem('highscores');
  window.location.reload();
}

startBtn.addEventListener('click', startQuiz);
choicesDiv.addEventListener('click', checkAnswer);
submitBtn.addEventListener('click', logScore);
viewHighscores.addEventListener('click', () => {
  printHighscores();
  scoresModal.classList.remove('hidden');
})
clearBtn.addEventListener('click', clearHighscores);