import { isYes } from '../src/is-yes.js';

const test = QUnit.test;

test('should return true if the user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsYes = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsYes, true);
});


test('should return true if the user says y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'y';

    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsYes = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsYes, true);
});


test(`should return false if the user doesn't say yes`, function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'no';

    //Act 
    // Call the function you're testing and set the result to a const
    const userAnswerIsYes = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userAnswerIsYes, false);
});