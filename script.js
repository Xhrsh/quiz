let q=[
    {
        question: "found the odd one",
        a: "AMERICA",
        b: "RUSSIA",
        c: "AFRICA",
        d: "ITALY ",
        correct: "c",
    },
    {
        question: "find the odd one",
        a: "IRON MAN",
        b: "SIPDER MAN",
        c: "ANT MAN",
        d: "BATMAN",
        correct: "d",
    },
    {
        question: "find the odd one",
        a: "11:sep:2001",
        b: "14:otc:2001",
        c: "11:sep:2002",
        d: "14:sep:2001 ",
        correct: "a",
    },
    {
        question: "find the odd one",
        a: "rajini",
        b: "kamal",
        c: "ajith",
        d: "suriya",
        correct: "d",
    },
   
]
let x=document.getElementById('quiz')
let a=document.querySelectorAll('.answer')
let question=document.getElementById('question')
let a_test=document.getElementById('a_test')
let b_test=document.getElementById('b_test')
let c_test=document.getElementById('c_test')
let d_test=document.getElementById('d_test')
let submitbtn=document.getElementById('submit');
var cur=0;
var score=0;
loadQuiz()
function loadQuiz(){
    deselect()
    let cat= q[cur];
    question.innerText=cat.question
    a_test.innerText=cat.a;
    b_test.innerText=cat.b;
    c_test.innerText=cat.c;
    d_test.innerText=cat.d;
    

}
function deselect(){
    a.forEach(a =>a.checked=false)
}
function selected(){
    let ans;
    a.forEach(an=>{
        if(an.checked){
            answer=an.id;
        }
    })
    return answer
}
submitbtn.addEventListener('click',() =>{
    let answer=selected()
    if(answer){
        if(answer === q[cur].correct){
            score++
        }
        cur++
        if(cur<q.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You Score is ${score} </h2>`
        }
    }
})
