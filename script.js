import { quiz } from './quiz.js'
const startBtn = document.querySelector(".start-btn")
const rules = document.querySelector(".rules")
const exit = document.querySelector(".exit-btn")
const continueBtn = document.querySelector('.continue-btn')
const quizQuestions = document.querySelector('.quiz-questions')
const newQuestion = document.querySelector('.javascript-questions').querySelector('h2')
const questionAnswers = document.querySelector('.question-answers')
const nextQuestion = document.querySelector('.next-question-btn')
const questionsRemaining = document.querySelector('.num-of-questions-left')
const time = document.querySelector('.time')
const result = document.querySelector('.result')
const quitBtn = document.querySelector('.quit-btn')
const replayBtn = document.querySelector('.replay-btn')
const totalScore = document.querySelector('.total-score')
const increaseLine = document.querySelector('.increasing-line')
let score = 0
let timeCount = 15
let updateTime = ''



startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide-start-btn')
    rules.classList.add('rules-display')
})

exit.addEventListener('click', () => {
    rules.classList.remove('rules-display')
    startBtn.classList.remove('hide-start-btn')
})

continueBtn.addEventListener('click', () => {
    rules.classList.remove('rules-display')
    quizQuestions.classList.add('display-quiz-questions')
    generateQuestion()
})

nextQuestion.addEventListener('click', () => {
    if (i >= 29) {
        quizQuestions.classList.remove('display-quiz-questions')
        result.classList.add('show-result')
        totalScore.innerHTML = `You've completed Jerry's Quiz! and nice 🤓, You got <span>${score}</span> out of <span>30</span>`
    } else {
        questionAnswers.textContent = ''
        clearInterval(updateTime)
        generateQuestion()
    }
    console.log(score)
})

quitBtn.addEventListener('click', () => {
    result.classList.remove('show-result')
    startBtn.classList.remove('hide-start-btn')
    i = -1
    score = 0
    newQuestion.textContent = ''
    questionAnswers.innerHTML = ''
    clearInterval(updateTime)
})

replayBtn.addEventListener('click', () => {
    result.classList.remove('show-result')
    quizQuestions.classList.add('display-quiz-questions')
    i = -1
    score = 0
    newQuestion.textContent = ''
    questionAnswers.innerHTML = ''
    clearInterval(updateTime)
    generateQuestion()
})

let i = -1

function generateQuestion() {
    timeLineWidth = 0
    increaseLine.style.width = '0%'
    i++
    newQuestion.textContent = `${i + 1}. ${quiz[i].question}`
    timeCount = 15
    updateTime = setInterval(timeCountDown, 1000)
    for (let j = 0; j < quiz[i].answers.length; j++) {
        if (quiz[i].answers[j].correct == false) {
            questionAnswers.innerHTML += `<div class="answer">
        <p>${quiz[i].answers[j].ans}</p>
        <div class="answer-status"><i class="fa-regular fa-circle-xmark"></i></div>
        </div>`
        } else if (quiz[i].answers[j].correct == true) {
            questionAnswers.innerHTML += `<div class="answer">
        <p>${quiz[i].answers[j].ans}</p>
        <div class="answer-status"><i class="fa-regular fa-circle-check"></i></div>
        </div>`
        }
    }
    questionsRemaining.innerHTML = `<p><span>${i + 1}</span> of <span>30</span> Questions</p>`
    increaseLine.style.width = '0px'
    showAnswer()

}

function showAnswer() {
    const allAnswers = document.querySelectorAll('.answer')
    allAnswers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.querySelector('.fa-regular').classList.contains('fa-circle-xmark') == false) {
                answer.querySelector('.fa-circle-check').classList.add('display-status')
                score++
                console.log(score)
                clearInterval(updateTime)
            }
            else {
                answer.querySelector('.fa-circle-xmark').classList.add('display-status')
                const correctOption = document.querySelector('.fa-circle-check')
                correctOption.classList.add('display-status')
                clearInterval(updateTime)
            }
        }, { once: true })
    })
}

let timeLineWidth = 0

function timeCountDown() {
    timeLineWidth = timeLineWidth + 6.67
    increaseLine.style.width = `${timeLineWidth}%`
    if (timeCount > 0) {
        time.innerHTML = `<div class="time-status">
                        <p>Time Left</p>
                    </div>
                    <div class="time-countdown">
                        <p>${timeCount--}</p>
                    </div>`
    }
    else if (timeCount <= 0) {
        time.innerHTML = `<div class="time-status">
                        <p>Time Off</p>
                    </div>
                    <div class="time-countdown">
                        <p>${timeCount}</p>
                    </div>`
        const timeOffAnswer = document.querySelector('.fa-circle-check')
        timeOffAnswer.classList.add('display-status')
        increaseLine.style.width = '100%'
        clearInterval(updateTime)
    }
}
