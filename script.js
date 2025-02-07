const messages = [
    "Are you sure?",
    "BREATHEEEEEEE... then answer!",
    "PAGAL ho kya? 😜",
    "Recall JOI LAISUUU moment!",
    "OHH SHITTTT... wrong answer!",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Add temporary animation class
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 500);
    
    // Cycle messages with reset protection
    if(messageIndex < messages.length - 1) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
    }
    
    // Scale yes button with max size limit
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    if(currentSize < 100) {
        yesButton.style.fontSize = `${currentSize * 1.3}px`;
    }
    
    // Add confetti effect on later stages
    if(messageIndex > 3) {
        createConfetti();
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Add confetti animation function
function createConfetti() {
    // When creating confetti particles
    if(Math.random() < 0.3) {
        particle.text = ["JOI", "LAISUUU", "❤️"][Math.floor(Math.random()*3)];
    }
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowLeft') handleYesClick();
    if(e.key === 'ArrowRight') handleNoClick();
});