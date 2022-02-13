const quizArray = [ 
    {
    question: 'HTML stands for?',
    a: 'Hyper Text Makeup Language' ,
    b: 'Hyper Text Markup Language' ,
    c: 'Higher Text Markup Language' ,
    d: 'Jason Object Model' ,
    correct: 'a'
    },
    {
    question: 'Javascript Launched in which year?',
    a: '2015' ,
    b: '2005' ,
    c: '1990' ,
    d: '1995' ,
    correct: 'd'
    },
    {
    question: 'Microsoft was founded by?',
    a: 'Sundar Pichai',
    b: 'Dwayne Johnson',
    c: 'Steve Jobs',
    d: 'Bill Gates' ,
    correct: 'd'
    },
    {
    question: 'India\'s National Aniamal?',
    a: 'Lion' ,
    b: 'Tiger' ,
    c: 'Zebra' ,
    d: 'Bear' ,
    correct: 'b'
    },
    {
    question: 'Choose a Free Open Source?',
    a: 'Linux' ,
    b: 'Windows' ,
    c: 'Mac-OS' ,
    d: 'none of these' ,
    correct: 'a'
    },  
]
const questionE = document.getElementById('quiz_qn');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerE = document.querySelectorAll(".answers");
const quiz = document.getElementById("quiz");


let quiz_qn = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelected();
const current_qn = quizArray[quiz_qn];
questionE.innerText = current_qn.question;
a_text.innerText = current_qn.a;
b_text.innerText = current_qn.b;
c_text.innerText = current_qn.c;
d_text.innerText = current_qn.d;
}

function getSelected(){
    let answers = undefined;
    answerE.forEach((ans) => {
        if(ans.checked){
            answers = ans.id;
        }
    }) 
    return answers;
}
function deSelected(){
    answerE.forEach((ans) =>{
        ans.checked = false;
    });
}


submitBtn.addEventListener('click' , () => {
    
    let quiz_value = getSelected(); 
    if(quiz_value){
        if ( quiz_value === quizArray[quiz_qn].correct) {
            score++;
            
        }
        quiz_qn++;
        if( quiz_qn >= quizArray.length ){
            quiz.innerHTML = `<h2>You just scored ${score} from ${quizArray.length} questions </h2> <button onClick = location.reload()>Retry</button>`;
        }
        else{
            submitBtn.innerText = quiz_qn >= quizArray.length - 1 ? "Submit" : "Next";
            loadQuiz();
        }
    } 
    else{
        alert('Option not selected');
    } 
});
