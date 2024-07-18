// test-script.js
var selectedButton = null;
var answersList = {};

function selectButton(button, questionNumber, choice) {
    // Reset the background color for all buttons within the specific answer section
    var buttons = document.querySelectorAll('.flex-box.answer.answer' + questionNumber + ' button');
    buttons.forEach(function (btn) {
        btn.style.backgroundColor = '';
    });

    // Set the background color for the newly selected button
    button.style.backgroundColor = '#8B0000'; // Change to your desired color
    // Update the selectedButton variable
    selectedButton = button;

    // Update the answersList for the specific section
    answersList[questionNumber] = choice;

        // Display the latest answers list at the bottom of the website
    displayAnswersList();
    saveAnswersList();
}
function displayAnswersList() {
    var displayElement = document.getElementById('answersListDisplay');
    displayElement.innerHTML = '<strong>Selections:</strong><br>' + JSON.stringify(answersList, null, 2);
}

function saveAnswersList() {
    // Save answersList to localStorage
    localStorage.setItem('answersList', JSON.stringify(answersList));
}



function checkAnswersAndNavigate(resultsPage) {
    // Check if there are selections for all questions
    if (Object.keys(answersList).length < 17) {
        var displayAlert = document.getElementById('alert');
        displayAlert.innerHTML = 'Please answer all questions before viewing results!';
        return;
    }

    // If all questions have been answered, navigate to the results page
    window.location.href = resultsPage;
}


