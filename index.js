const data = [

  {
  question: "Care este capitala Romaniei?",
  a: "Chisnau",
  b: "Bucuresti",
  c: "Cluj",
  d:  "Sibiu",
  correct: "b"
},

  {
  question: "Ce reprezinta Ag in tabelul periodic?",
  a: "aur",
  b:  "argint",
  c:  "cupru",
  d:  "oxigen",
  correct: "b"
},

  {question: "Cate zile sunt intr-o saptamana?",
  answer1: "4",
  answer2:  "5",
  answer3:  "6",
  answer4:  "7",
},

  {
  question: "Care este capitala Moldovei?",
  a: "Chisnau",
  b: "Bucuresti",
  c: "Cluj",
  d:  "Sibiu",
  correct: "a"
},

  {
  question: "Ce reprezinta Cl in tabelul periodic?",
  a: "aur",
  b:  "argint",
  c:  "cupru",
  d:  "oxigen",
  correct: "b"
},

]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')
//question.innerText = data.question;

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()
   
  const currentQuizData = data[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers()
{
  answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected()
{
  let answerEls
  answerEls.forEach(answerEls => {
    if(answerEls.checked) {
      answer = answerEls.id
    }
  })
   return answer
}

submtBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === data[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < data.length) {
      loadQuiz()
    } else 
       {
       quiz.innerHTML =
    <><h2>Ai raspuns ${score}/{data.length} intrebari corect</h2><button onclick="location.reload()">Reload</button></>
  }
  }
})












 