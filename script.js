document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const scoreContainer = document.getElementById('score');
    const submitQuizButton = document.getElementById('submit-quiz');
    let currentQuestionIndex = 0;
    let numCorrect = 0;
    let shuffledQuestions = [];

    const answerMapping = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F'};

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function showQuestion(questionIndex) {
        const currentQuestion = shuffledQuestions[questionIndex];
        const answers = [];
        currentQuestion.POSSIBLE_ANSWERS.forEach((answer, index) => {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${index + 1}">
                    ${answer}
                </label><br>`
            );
        });
        quizContainer.innerHTML = `
            <div class="question-type">${currentQuestion.QUESTION_TYPE}</div>
            <div class="question">${currentQuestion.QUESTION_TEXT} </div>
            <div class="answers"> ${answers.join('')} </div>
            <button id="submit">Submit Answer</button>
        `;
        document.getElementById('submit').addEventListener('click', showExplanation);
    }

    function showExplanation() {
    const answerContainer = quizContainer.querySelector('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswer = parseInt((answerContainer.querySelector(selector) || {}).value);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.CORRECT_ANSWER;
    const userAnswerLetter = answerMapping[userAnswer];
    
    let resultText;
    let resultClass;

    if (userAnswerLetter === correctAnswer) {
        numCorrect++;
        resultText = `Your Answer was ${userAnswerLetter}. Correct! ${correctAnswer} is the right answer.`;
        resultClass = 'correct';  // Set class to correct if the answer is right
    } else {
        resultText = `Your Answer was ${userAnswerLetter}. Wrong. ${correctAnswer} is the right answer.`;
        resultClass = 'wrong';  // Set class to wrong if the answer is incorrect
    }

    quizContainer.innerHTML += `
        <div class="result ${resultClass}">${resultText}</div>
        <div class="explanation">${currentQuestion.EXPLANATION_TEXT}</div>
        <button id="next">Next Question</button>
    `;
    
    document.getElementById('submit').disabled = true;
    document.getElementById('next').addEventListener('click', showNextQuestion);
    updateScore();
}


    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }

    function showResults() {
        const numQuestions = currentQuestionIndex;
        const numWrong = numQuestions - numCorrect;
        const scorePercentage = ((numCorrect / numQuestions) * 100).toFixed(2);
        quizContainer.innerHTML = '';
        resultsContainer.innerHTML = `
            You answered ${numQuestions} questions.<br>
            You had ${numCorrect} correct answers.<br>
            You had ${numWrong} wrong answers.<br>
            This gives you a rate of ${scorePercentage}%.<br>
            <button id="restart-quiz">Restart Quiz</button>
        `;
        document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
    }

    function updateScore() {
        const scorePercentage = ((numCorrect / (currentQuestionIndex + 1)) * 100).toFixed(2);
        scoreContainer.innerHTML = `Current Score: ${scorePercentage}%`;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        numCorrect = 0;
        shuffledQuestions = shuffleArray([...questions]);
        resultsContainer.innerHTML = '';
        updateScore();
        showQuestion(currentQuestionIndex);
    }

    submitQuizButton.addEventListener('click', showResults);

    // Initialize the quiz with shuffled questions
    shuffledQuestions = shuffleArray([...questions]);
    showQuestion(currentQuestionIndex);
});
