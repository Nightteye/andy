// --- Configuration ---
const maxClicks = 5; 

// --- Variables ---
let clickCount = 0;
let isCracked = false;
let musicStarted = false;

// --- Elements ---
const eggImg = document.getElementById('egg-img');
const instructionText = document.getElementById('instruction-text');
const chickContainer = document.getElementById('chick-container');
const footerMsg = document.getElementById('footer-msg');
const shadow = document.querySelector('.pedestal-shadow'); 
const marquee = document.getElementById('marquee'); 

// --- Audio ---
const crackSound = new Audio('assets/audio/crack.mp3'); 
const cheerSound = new Audio('assets/audio/cheer.mp3');
const bgm = document.getElementById('bgm'); 
bgm.volume = 0.3; 

// --- Interaction ---
eggImg.addEventListener('click', function() {
    
    if (!musicStarted) {
        bgm.play().catch(e => console.log("BGM autoplay prevented"));
        musicStarted = true;
    }

    if (isCracked) return; 

    // Reset Animations
    eggImg.style.animation = 'none'; 
    eggImg.offsetHeight; 
    eggImg.style.animation = null; 
    
    // Add Shake
    eggImg.classList.remove('shake'); 
    void eggImg.offsetWidth; 
    eggImg.classList.add('shake');

    if (navigator.vibrate) navigator.vibrate(50); 

    clickCount++;
    handleEggState(clickCount);
});

function handleEggState(count) {
    if (count === 1) {
        instructionText.innerText = "Hey! Be gentle! 🥚";
        changeImage("assets/images/egg-crack-1.png");
        playSound(crackSound);
    } 
    else if (count === 3) {
        instructionText.innerText = "Stop! It's gonna break! 😱";
        changeImage("assets/images/egg-crack-2.png");
        if (navigator.vibrate) navigator.vibrate(100);
        playSound(crackSound);
    } 
    else if (count >= maxClicks) {
        isCracked = true; 
        triggerFinale();
    }
}

function triggerFinale() {
    // 1. Break Egg
    changeImage("assets/images/egg-shell.png"); 
    instructionText.style.opacity = '0';
    shadow.style.opacity = '0'; 
    
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]); 
    playSound(cheerSound);

    // 2. Confetti
    fireConfetti();

    // 3. Text Fly Out Sequence
    // "ALL" (0.6s)
    setTimeout(() => {
        const w1 = document.getElementById('word1');
        w1.classList.add('visible', 'pos-left');
    }, 600); 

    // "THE" (1.2s)
    setTimeout(() => {
        const w2 = document.getElementById('word2');
        w2.classList.add('visible', 'pos-center');
    }, 1200); 

    // "BEST" (1.8s)
    setTimeout(() => {
        const w3 = document.getElementById('word3');
        w3.classList.add('visible', 'pos-right');
        fireConfetti();
    }, 1800); 

    // "FOR" (2.4s) - NEW
    setTimeout(() => {
        const w4 = document.getElementById('word4');
        w4.classList.add('visible', 'pos-gap-left');
    }, 2400);

    // "BOARDS" (3.0s) - NEW
    setTimeout(() => {
        const w5 = document.getElementById('word5');
        w5.classList.add('visible', 'pos-gap-right');
        
        // Show Marquee after text is done
        marquee.style.opacity = '1'; 
        fireConfetti();
    }, 3000);

    // 4. Chick Reveal (3.8s) - Delayed slightly for new words
    setTimeout(() => {
        chickContainer.style.display = 'block';
        chickContainer.classList.add('fly-in');
        
        setTimeout(() => {
            chickContainer.classList.remove('fly-in'); 
            chickContainer.classList.add('chick-hovering');
            footerMsg.classList.add('show');
        }, 1200); 
        
    }, 3800); 
}

function changeImage(path) { eggImg.src = path; }

function playSound(audio) {
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play failed"));
    }
}

function fireConfetti() {
    confetti({
        particleCount: 100, // Reduced count for mobile
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'],
        disableForReducedMotion: true // Respects battery saver mode
    });
}