// const quizData = {
//     question: 'What is the capital of France',
//     options: ['Berlin','Madrid','Paris','Akpabuyo'],
//     correctAnswer: 'Paris'
// }

const quizData = [
      {
        question: 'What is the capital of France',
        options: ['Berlin','Madrid','Paris','Akpabuyo'],
        correctAnswer: 'Paris'
      },
      {
        question: 'Which Planet is Known as the Red Planet',
        options: ['Earth','Mars','Pluto','Jupiter'],
        correctAnswer: 'Mars'
      },
      {
        question: 'What is the largest Mammal?',
        options: ['Elephant','Blue Whale','Giraffe','Hippopotamus'],
        correctAnswer: 'Blue Whale'
      }
];




const quizContainer = document.querySelector('#quizContainer');

const resultContainer = document.querySelector('#result');
const count = document.querySelector('.count');

let currentQuestion = 0;
let score = 0;
count.innerHTML;


function displayQuestion() {

    const currentQuizData = quizData[currentQuestion];

    quizContainer.innerHTML=`<h3> ${currentQuizData.question} </h3>
    
    <ul>
    ${
        currentQuizData.options.map((option,index) =>
        `
        <li onclick "checkAnswer" (${index})>
        ${option}
        </li>
        `
        ).join('')}   

    </ul>
    `;    
}

//function to check answer

    function checkAnswer(selectIndex) {
        const currentQuizData = quizData[currentQuestion];

        if(currentQuizData.options[selectIndex] === currentQuizData.correctAnswer){
            score++;
        }

        currentQuestion++;
        count.innerHTML = currentQuestion;

        if(currentQuestion < quizData.length){

            displayQuestion();

        }else{
            showResult();
        }

    }

    //function to show result
    function showResult(){
        resultContainer.innerHTML = `your score: ${score} out of ${quizData.length}`
    }

    function submitQUiz(){
        alert("please click on any option to answer the question");
    }

displayQuestion();