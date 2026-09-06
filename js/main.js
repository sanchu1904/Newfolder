// Application initialization and global utilities

function initializeApp() {
    const studentName = localStorage.getItem('studentName');
    if (!studentName) {
        localStorage.setItem('studentName', 'Student ' + Math.floor(Math.random() * 1000));
    }

    if (!localStorage.getItem('scores')) {
        localStorage.setItem('scores', JSON.stringify({
            programming: 0,
            aptitude: 0,
            'technical-practice': 0,
            communication: 0,
            'general-knowledge': 0,
            ethics: 0,
            values: 0
        }));
    }
}

function updateStudentScore(module, score) {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[module] = score;
    localStorage.setItem('scores', JSON.stringify(scores));
}

function getStudentScore(module) {
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    return scores[module] || 0;
}

window.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});