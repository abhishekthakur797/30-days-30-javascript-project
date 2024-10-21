// Here we will set the question first.

const questions = [
  {
    question:
      "Who is the only player to score a century in their 100th Test match?",
    answers: [
      {
        text: "Ricky Ponting",
        correct: true,
      },
      {
        text: "Kumar Sangakkara",
        correct: false,
      },
      {
        text: "Sachin Tendulkar",
        correct: false,
      },
      {
        text: "Jacques Kallis",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which bowler holds the record for the most wickets in a single edition of the ICC Cricket World Cup?",
    answers: [
      {
        text: "Mitchell Starc",
        correct: true,
      },
      {
        text: "Muttiah Muralitharan",
        correct: false,
      },
      {
        text: "Shane Warne",
        correct: false,
      },
      {
        text: "Trent Boult",
        correct: false,
      },
    ],
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    answers: [
      {
        text: "Rohit Sharma",
        correct: true,
      },
      {
        text: "Martin Guptill",
        correct: false,
      },
      {
        text: "Chris Gayle",
        correct: false,
      },
      {
        text: "Virender Sehwag",
        correct: false,
      },
    ],
  },
  {
    question: "Which country won the first-ever Cricket World Cup in 1975?",
    answers: [
      {
        text: "West Indies",
        correct: true,
      },
      {
        text: "Australia",
        correct: false,
      },
      {
        text: "India",
        correct: false,
      },
      {
        text: "England",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const AnswerBtn = document.getElementById("answers-btn");
const nextBtn = document.getElementById("next-btn");
