const questions = [
  {
    question: "Who is the only player to score a century in both innings of their 100th Test match?",
    answers: [
      { text: "Ricky Ponting", correct: true },
      { text: "Kumar Sangakkara", correct: false },
      { text: "Sachin Tendulkar", correct: false },
      { text: "Jacques Kallis", correct: false },
    ],
  },
  {
    question: "Which bowler holds the record for the most wickets in a single edition of the ICC Cricket World Cup?",
    answers: [
      { text: "Mitchell Starc", correct: true },
      { text: "Muttiah Muralitharan", correct: false },
      { text: "Shane Warne", correct: false },
      { text: "Trent Boult", correct: false },
    ],
  },
  {
    question: "Who holds the record for the highest individual score in ODI cricket?",
    answers: [
      { text: "Rohit Sharma", correct: true },
      { text: "Martin Guptill", correct: false },
      { text: "Chris Gayle", correct: false },
      { text: "Virender Sehwag", correct: false },
    ],
  },
  {
    question: "Which country won the first-ever Cricket World Cup in 1975?",
    answers: [
      { text: "West Indies", correct: true },
      { text: "Australia", correct: false },
      { text: "India", correct: false },
      { text: "England", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Shuffle a copy of an array so the right answer isn't always first.
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const current = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${current.question}`;

  shuffle(current.answers).forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) button.dataset.correct = "true";
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(event) {
  const selected = event.target;
  const isCorrect = selected.dataset.correct === "true";

  if (isCorrect) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
  }

  // Reveal the correct answer and lock all buttons.
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else if (currentQuestionIndex === questions.length) {
    showScore();
  } else {
    startQuiz();
  }
});

startQuiz();
