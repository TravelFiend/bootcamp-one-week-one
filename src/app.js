import { isYes } from './is-yes.js';
const myButton = document.getElementById('quiz-button');
const myQuizResults = document.getElementById('quizResults');
const myScore = document.getElementById('score');
let total = 0;
let percent;

myButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    
    const userName = prompt('What is your name?');
    const myConfirmation = confirm(`Hey ${userName}, do you want to take my quiz?`);

    if (myConfirmation){ 

        const answer1 = prompt('Have I visited Portugal?');
        const sanitizedUserAnswer1 = answer1.toLowerCase().trim();
        const userTypedYes1 = isYes(sanitizedUserAnswer1);
        if (!userTypedYes1){
            total++;
        }

        const answer2 = prompt(`Do I have a bachelor's degree in printmaking?`);
        const sanitizedUserAnswer2 = answer2.toLowerCase().trim();
        const userTypedYes2 = isYes(sanitizedUserAnswer2);
        if (userTypedYes2) {
            total++;
        }

        const answer3 = prompt(`Was my first downhill ride in Wyoming?`);
        const sanitizedUserAnswer3 = answer3.toLowerCase().trim();
        const userTypedYes3 = isYes(sanitizedUserAnswer3);
        if (!userTypedYes3) {
            total++;
        }

        alert(`Quiz complete!  Your score will now show on the webpage.`);
        myScore.innerHTML = `You completed the quiz ${userName}!  Your score is ${total}/3.`;
    }
    return;
});