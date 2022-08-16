var qaList = [  
    {question: "what is 3+3?",
    answer: 6,
  },
  {
    question: "how many seasons do we have?",
    answer: 4,
  },
  {
    question: "how many days in August?",
    answer: 31,
  },
];


function callQA() {
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;
    if (question.trim()=='' || answer.trim()== '') {
        alert('Question or answer CANNOT be empty!');
    } else {
        var qaObj = loadQA(question, answer);
        qaList.push(qaObj);
        document.getElementById("question").value = '';
        document.getElementById("answer").value = '';
        document.getElementById('formMessage').innerHTML = `Data loaded to QA Array. System now holding ${qaList.length} QA objects.`;
    }

}

function qRender(i){
    document.getElementById('questionArea').innerHTML = `Question: ${qaList[i].question}`;
    document.getElementById('answerArea').innerHTML = 'Answer:';
    document.getElementById('questionArea').qIndex = i;
    document.getElementById('questionArea').showAnswer = false; 
}

function aRender(){
    i = document.getElementById('questionArea').qIndex;
    ifShown = document.getElementById('questionArea').showAnswer
    if (ifShown) {
        document.getElementById('answerArea').innerHTML = 'Answer:';
        document.getElementById('questionArea').showAnswer = false;
    } else {
        document.getElementById('answerArea').innerHTML = `Answer: ${qaList[i].answer}`;
        document.getElementById('questionArea').showAnswer = true;
    }
}

function qaDisplay(){
    if (qaList.length == 0) {
        document.getElementById('questionArea').innerHTML = 'No QA data found! Please input you data.';
    } else {
        var i = 0
        document.getElementById("nextQuestion").removeAttribute("hidden");
        document.getElementById("prevQuestion").removeAttribute("hidden");;
        document.getElementById("showAnswer").removeAttribute("hidden");
        qRender(i);
    }
}

function nextQuestion(){
    i = document.getElementById('questionArea').qIndex;
    if (i == qaList.length - 1) {
        i = 0;
    } else {
        i++;
    }
    qRender(i);
}

function prevQuestion(){
    i = document.getElementById('questionArea').qIndex;
    if (i == 0) {
        i = qaList.length - 1;
    } else {
        i--;
    }
    qRender(i);
}

function qaConsole(){
    var i = 0
    do {
        console.log('question:', qaList[i].question);
        console.log('answer:', qaList[i].answer);
        i++;
    } while (i < qaList.length);
    document.getElementById('qaInConsole').innerHTML = `${qaList.length} QA pairs are printed in console.`
}
