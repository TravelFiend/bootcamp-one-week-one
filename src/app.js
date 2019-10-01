import { isYes } from './is-yes.js';
const myButton = document.getElementById('quiz-button');

myButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    
    const userName = prompt('What is your name?');
    const myConfirmation = confirm('Do you want to take my quiz?');

    if(myConfirmation){ 
        alert(`Let's get this party started!`);
        const answer1 = prompt('Have I visited Portugal?');
        const answer2 = prompt(`Do I have a bachelor's degree in printmaking?`);
        const answer3 = prompt(`Was my first downhill ride in Wyoming?`);

        
        const lowercaseUserAnswer = userAnswer.toLowerCase();
        const trimmedLowercaseUserAnswer = lowercaseUserAnswer.trim();

        const userTypedYes = isYes(trimmedLowercaseUserAnswer);

        alert(`Quiz complete!  Your score will now show on the webpage.`);
    }
    return;
});