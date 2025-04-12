const quizData = [
    {
        question: "Maria Tanveer is currently completing a PhD in:",
        options: [
            "Computer coding",
            "clinical Science Researcher",
            "Interactive programming languages",
            "Low and high-fidelity prototyping"
        ],
        correct: "Clinical Science Researcher"
    },
    {
        question: "Maria Tanveer works at:",
        options: [
            "Queensland Health",
            "Queensland University of Technology",
            "University of Technology in Sydney",
            "All of the above"
        ],
        correct: "Queensland University of Technology"
    },
    {
        question: "Maria’s research skills include:",
        options: [
            "Leadership",
            "Planning and scheduling",
            "Teamwork",
            "Injury Management"
        ],
        correct: "Injury Management"
    },
    {
        question: "Maria is super passionate about:",
        options: [
            "People",
            "Injury Management",
            "Human-centred design",
            "All of the above and more!"
        ],
        correct: "Human-centred design"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((questionData, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.textContent = questionData.question;
        questionElement.appendChild(questionText);

        questionData.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionElement.appendChild(optionLabel);
            questionElement.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElement);
    });
}

function showResults() {
    const resultsContainer = document.getElementById('results');
    let score = 0;

    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionData.correct) {
            score++;
        }
    });

    resultsContainer.textContent = `Your score is ${score} out of ${quizData.length}`;
}

document.getElementById('submit').addEventListener('click', showResults);

// Load the quiz when the page loads
loadQuiz();
