// Matrix Effect JavaScript

// Matrix Falling Code Effect
const matrixEffect = () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.style.position = 'absolute';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const columns = canvas.width / 20;
    const drops = Array(columns).fill(1);

    const charArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

    const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00FF00';
        ctx.font = '20px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = charArr[Math.floor(Math.random() * charArr.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    };

    setInterval(drawMatrix, 50);
};

matrixEffect();

// Reveal Station Functionality
const stations = document.querySelectorAll('.station');
let currentStation = 0;

const revealStation = () => {
    if (currentStation < stations.length) {
        stations[currentStation].classList.remove('hidden');
    }
};

// Handling Station 1 Form Submission
document.getElementById('submitStation1').addEventListener('click', () => {
    const evidence1 = document.getElementById('evidence1').value.trim();
    const evidence2 = document.getElementById('evidence2').value.trim();

    if (evidence1 && evidence2) {
        alert('You have successfully gathered evidence for Station 1!');
        currentStation++;
        revealStation();
    } else {
        alert('Please fill in both answers before submitting!');
    }
});

// Handling Station 2 Form Submission
document.getElementById('submitStation2').addEventListener('click', () => {
    const suspectAnalysis = document.getElementById('suspectAnalysis').value.trim();

    if (suspectAnalysis) {
        alert('You have analyzed the suspects!');
        currentStation++;
        revealStation();
    } else {
        alert('Please provide your analysis!');
    }
});

// Handling Station 3 Form Submission
document.getElementById('submitStation3').addEventListener('click', () => {
    const clue1 = document.getElementById('clue1').value.trim();
    const clue2 = document.getElementById('clue2').value.trim();

    if (clue1 && clue2) {
        alert('You have solved the evidence puzzle!');
        currentStation++;
        revealStation();
    } else {
        alert('Please fill in both answers before submitting!');
    }
});

// Handling Final Decision Form Submission
document.getElementById('submitFinalDecision').addEventListener('click', () => {
    const finalDecision = document.getElementById('finalDecision').value.trim();

    if (finalDecision) {
        alert('You have made your final decision! The case is closed.');
    } else {
        alert('Please enter your final decision!');
    }
});

// Initially reveal the first station
revealStation();
