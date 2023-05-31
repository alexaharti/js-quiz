const data = {
  question: "Care este capitala Romaniei?",
  answers: [
    "Chisnau",
    "Bucuresti",
    "Cluj",
    "Sibiu",
    "Iasi"
  ]
};

const question = document.getElementsById("question")
question.innerText = data.question;

const app = document.getElementById("app");

const answers = app.getElementsByTagName('span');

answers[0].innerText = "Chisinau"
answers[1].innerText = "Bucuresti"
answers[2].innerText = "Cluj"
answers[3].innerText = "Sibiu"
answers[4].innerText = "Iasi"

let n_answ = 5;

for (let i=0; i<=4; i++) {
  answers[i].innerText = data.answers[i];
}