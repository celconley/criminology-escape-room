// Show and hide stations based on user actions
let currentStation = 1;

function showStation(stationNumber) {
    // Hide all stations
    document.querySelectorAll('.station').forEach(station => station.classList.add('hidden'));

    // Show the selected station
    document.getElementById(`station${stationNumber}`).classList.remove('hidden');
}

document.getElementById('submitStation1').addEventListener('click', function() {
    const evidence1 = document.getElementById('evidence1').value;
    const evidence2 = document.getElementById('evidence2').value;

    if (evidence1 && evidence2) {
        alert("Great job! You've completed Station 1.");
        currentStation = 2;
        showStation(currentStation);
    } else {
        alert("Please provide answers to both questions.");
    }
});

document.getElementById('submitStation2').addEventListener('click', function() {
    const analysis = document.getElementById('suspectAnalysis').value;

    if (analysis) {
        alert("Nice analysis! You've completed Station 2.");
        currentStation = 3;
        showStation(currentStation);
    } else {
        alert("Please provide your analysis on the suspects.");
    }
});

document.getElementById('submitStation3').addEventListener('click', function() {
    const clue1 = document.getElementById('clue1').value;
    const clue2 = document.getElementById('clue2').value;

    if (clue1 && clue2) {
        alert("Puzzle solved! You've completed Station 3.");
        currentStation = 4;
        showStation(currentStation);
    } else {
        alert("Please provide answers to both puzzle questions.");
    }
});

document.getElementById('submitFinalDecision').addEventListener('click', function() {
    const finalDecision = document.getElementById('finalDecision').value;

    if (finalDecision) {
        alert(`Your final decision: ${finalDecision}. You've completed the escape room!`);
    } else {
        alert("Please make your final decision about the suspect.");
    }
});

// Show the first station on page load
document.addEventListener('DOMContentLoaded', function() {
    showStation(currentStation);
});
