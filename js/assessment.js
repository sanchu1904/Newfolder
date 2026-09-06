// Assessment management and question flow

let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 600; // 10 minutes in seconds
const PASSING_SCORE = 60;

function initAssessment() {
    const module = sessionStorage.getItem('currentModule');
    
    if (!module) {
        window.location.href = 'dashboard.html';
        return;
    }

    questions = getQuestionsByModule(module);
    
    if (questions.length === 0) {
        alert('No questions found for this module');
        window.location.href = 'dashboard.html';
        return;
    }

    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    timeRemaining = 600;

    updateModuleTitle(module);
    loadQuestion();
    startTimer();
    setupEventListeners();
}

function updateModuleTitle(module) {
    const titles = {
        'programming': 'Programming Basics',
        'aptitude': 'Aptitude Assessment',
        'technical-practice': 'Technical Practice',
        'communication': 'Communication Skills',
        'general-knowledge': 'General Knowledge',
        'ethics': 'Ethical Scenarios',
        'values': 'Values & Principles'
    };

    document.getElementById('module-title').textContent = titles[module] || 'Assessment';
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        return;
    }

    const question = questions[currentQuestionIndex];
    
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;

    question.options.forEach((option, index) => {
        const optionSpan = document.getElementById(`option-${index}`);
        optionSpan.textContent = option;
    });

    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('assessment-progress').style.width = progressPercentage + '%';

    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach(radio => {
        radio.checked = false;
        radio.addEventListener('change', updateNavigationButtons);
    });

    if (userAnswers[currentQuestionIndex] !== null) {
        document.querySelector(`input[name="answer"][value="${userAnswers[currentQuestionIndex]}"]`).checked = true;
    }

    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.disabled = currentQuestionIndex === 0;
    
    const isAnswered = document.querySelector('input[name="answer"]:checked') !== null;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        submitBtn.disabled = !isAnswered;
    } else {
        nextBtn.disabled = !isAnswered;
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer before proceeding');
        return;
    }

    userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }

    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElement = document.getElementById('timer');
        timerElement.textContent = timeDisplay;

        if (timeRemaining <= 60) {
            timerElement.parentElement.classList.add('warning');
        }
        if (timeRemaining <= 30) {
            timerElement.parentElement.classList.add('danger');
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitAssessment();
        }
    }, 1000);
}

function submitAssessment() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }

    clearInterval(timerInterval);

    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            correctAnswers++;
        }
    });

    const result = {
        module: sessionStorage.getItem('currentModule'),
        totalQuestions: questions.length,
        correctAnswers: correctAnswers,
        percentage: Math.round((correctAnswers / questions.length) * 100),
        timestamp: new Date().toLocaleString()
    };

    const moduleMap = {
        'programming': 'programming',
        'aptitude': 'aptitude',
        'technical-practice': 'technical-practice',
        'communication': 'communication',
        'general-knowledge': 'general-knowledge',
        'ethics': 'ethics',
        'values': 'values'
    };

    const scoreKey = moduleMap[result.module];
    updateStudentScore(scoreKey, result.percentage);

    sessionStorage.setItem('assessmentResult', JSON.stringify(result));
    
    window.location.href = 'result.html';
}

function setupEventListeners() {
    const optionRadios = document.querySelectorAll('input[name="answer"]');
    optionRadios.forEach(radio => {
        radio.addEventListener('change', updateNavigationButtons);
    });
}

window.addEventListener('DOMContentLoaded', initAssessment);