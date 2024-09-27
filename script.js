let timerInterval;
let countdownTime = 120; // 120 seconds (2 minutes)
let isPaused = true; // Flag to check if the timer is paused

function startCountdown() {
    if (isPaused) {
        // Resume the countdown
        timerInterval = setInterval(() => {
            countdownTime--;
            updateTimerDisplay();

            if (countdownTime <= 0) {
                clearInterval(timerInterval);
                document.body.classList.add("red-flash"); // Flash red
            }
        }, 1000);

        document.getElementById("start-timer").textContent = "Pause Countdown";
        isPaused = false;
    } else {
        // Pause the countdown
        clearInterval(timerInterval);
        document.getElementById("start-timer").textContent = "Start Countdown";
        isPaused = true;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    document.getElementById("timer").textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    // Reset the countdown to 2 minutes
    clearInterval(timerInterval); // Stop any active timer
    countdownTime = 120;
    updateTimerDisplay(); // Update the timer display
    isPaused = true; // Reset to paused state
    document.getElementById("start-timer").textContent = "Start Countdown"; // Reset button text

    // Reset points for both teams
    leftTeamPoints = 0;
    rightTeamPoints = 0;
    document.getElementById('team-score-left').textContent = leftTeamPoints.toString().padStart(3, '0');
    document.getElementById('team-score-right').textContent = rightTeamPoints.toString().padStart(3, '0');
}

document.getElementById("start-timer").addEventListener("click", startCountdown);
document.getElementById("reset-timer").addEventListener("click", resetTimer);

// Initial points for both teams
let leftTeamPoints = 0;
let rightTeamPoints = 0;

// Array of random words
const words = ["Happy", "sad", "tired", "Scared", "Nervous", "Angry", "Bored", "Hungry", "Thirsty", "sick"];
// Array of possible points
const possiblePoints = [5, 10, 20];

// Function to add points to a team
function addPoints(team) {
    // Get the current points displayed for the random word
    const randomWordPoints = parseInt(document.getElementById('points-value').textContent);

    if (team === 'left') {
        // Add points to the left team
        leftTeamPoints += randomWordPoints;
        document.getElementById('team-score-left').textContent = leftTeamPoints.toString().padStart(3, '0');
    } else if (team === 'right') {
        // Add points to the right team
        rightTeamPoints += randomWordPoints;
        document.getElementById('team-score-right').textContent = rightTeamPoints.toString().padStart(3, '0');
    }
}

// Function to generate a random word and random points
function changeContent() {
    // Stop the flashing red background
    document.body.classList.remove("red-flash");

    // Generate a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('random-word').textContent = randomWord;

    // Generate random points (5, 10, or 20)
    const randomPoints = possiblePoints[Math.floor(Math.random() * possiblePoints.length)];
    document.getElementById('points-value').textContent = randomPoints.toString();
}
