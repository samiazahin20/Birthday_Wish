// =========================================
// GLOBAL VARIABLES
// =========================================

const loadingScene = document.getElementById("loadingScene");
const nightScene = document.getElementById("nightScene");

const typingText = document.getElementById("typingText");

const envelopeContainer = document.getElementById("envelopeContainer");

const message = "Today is someone very special's birthday... ❤️";

let typingIndex = 0;

// =========================================
// TYPEWRITER EFFECT
// =========================================

function typeWriter() {

    if (typingIndex < message.length) {

        typingText.innerHTML += message.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 60);

    } else {

        setTimeout(showWarningScene, 1800);

    }

}

typeWriter();

function showWarningScene() {

    loadingScene.classList.remove("active");

    document
        .getElementById("warningScene")
        .classList.add("active");

    setTimeout(function () {

        document
            .getElementById("warningScene")
            .classList.remove("active");

        showNightScene();

    }, 8000);

}

// =========================================
// SHOW NIGHT SCENE
// =========================================

function showNightScene() {

    loadingScene.classList.remove("active");

    nightScene.classList.add("active");

    createStars();

    setTimeout(function () {

        envelopeContainer.classList.add("show");

    }, 1500);

}

// =========================================
// CREATE STARS
// =========================================

function createStars() {

    const stars = document.getElementById("stars");

    stars.innerHTML = "";

    for (let i = 0; i < 300; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration = (1 + Math.random() * 3) + "s";

        stars.appendChild(star);

    }

}

// =========================================
// ENVELOPE
// =========================================

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const storyScene = document.getElementById("storyScene");

let envelopeOpened = false;

// Open Envelope

envelope.addEventListener("click", function () {

    if (envelopeOpened) return;

    envelopeOpened = true;

    envelope.classList.add("open");

});

// Click Letter

letter.addEventListener("click", function (e) {

    e.stopPropagation();

    if (!envelopeOpened) return;

    nightScene.style.opacity = "0";

    setTimeout(function () {

        nightScene.classList.remove("active");

        storyScene.classList.add("active");

        storyScene.style.opacity = "1";

        currentStory = 0;

        showStory();

    }, 1000);

});

// =========================================
// STORY DATA
// =========================================

const storyTitle = document.getElementById("storyTitle");
const storyImage = document.getElementById("storyImage");
const storyText = document.getElementById("storyText");
const nextBtn = document.getElementById("nextBtn");

const memories = [

{
    title: "💕 Our First Memory",
    image: "images/selfie1.jpg",
    text: "Our very first selfie"
},

{
    title: "💍 Our Wedding Day",
    image: "images/wedding.jpg",
    text: "Our Wedding Day 💍"
},

{
    title: "🌸 A Beautiful Day",
    image: "images/memory1.jpg",
    text: "Every day with you becomes my favorite story."
},

{
    title: "❤️ I Love You",
    image: "images/memory2.jpg",
    text: "❤️"
},

{
    title: "❤️ I Love You",
    image: "images/memory3.jpg",
    text: "❤️"
}

];

let currentStory = 0;

// =========================================
// SHOW STORY
// =========================================

function showStory() {

    storyTitle.innerText = memories[currentStory].title;

    storyImage.src = memories[currentStory].image;

    storyText.innerText = memories[currentStory].text;

}

// Next Story

nextBtn.addEventListener("click", function () {

    currentStory++;

    if (currentStory < memories.length) {

        showStory();

    } else {

        storyScene.classList.remove("active");

        document.getElementById("letterScene").classList.add("active");

        startLetter();

    }

});

// =========================================
// LETTER SCENE
// =========================================

const letterScene = document.getElementById("letterScene");
const typedLetter = document.getElementById("typedLetter");
const letterNextBtn = document.getElementById("letterNextBtn");

const letterMessage = `My Dearest Husband AJ❤️,
Happy Birthday!
Thank God for your yapping
I never have to awkwardly deal with silence
I can just nod and smile
Shukria Janab for that ❤️
May this birthday bring you endless happiness,
and everything your heart wishes for.

Happy Birthday once again,
My Love ❤️`;

let letterIndex = 0;

function startLetter() {

    typedLetter.innerHTML = "";
    letterIndex = 0;

    typeLetter();

}

function typeLetter() {

    if (letterIndex < letterMessage.length) {

        typedLetter.innerHTML += letterMessage.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter, 35);

    }

}

// =========================================
// CUSTOMER REVIEW SCENE
// =========================================

const reviewScene = document.getElementById("reviewScene");
const reviewNextBtn = document.getElementById("reviewNextBtn");

letterNextBtn.addEventListener("click", function () {

    letterScene.classList.remove("active");
    reviewScene.classList.add("active");

});

// =========================================
// UPDATE SCENE
// =========================================

const updateScene = document.getElementById("updateScene");
const updateText = document.getElementById("loadingText");

const progressArea = document.getElementById("progressArea");
const progressFill = document.getElementById("progressFill");

const updateResult = document.getElementById("updateResult");
const updateNextBtn = document.getElementById("updateNextBtn");

reviewNextBtn.addEventListener("click", function () {

    reviewScene.classList.remove("active");
    updateScene.classList.add("active");

    startUpdateAnimation();

});

function startUpdateAnimation() {

    updateText.style.display = "block";
    progressArea.style.display = "none";

    updateResult.style.display = "none";
    updateNextBtn.style.display = "none";

    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
  

    setTimeout(() => {
        progressFill.style.transition = "width 4s linear";
    }, 10);

    updateText.innerHTML = "⏳ Loading...";

setTimeout(function () {
    updateText.innerHTML = "⏳ Loading...";
}, 1000);

setTimeout(function () {
    updateText.innerHTML = "⏳ Still loading...";
}, 2000);

setTimeout(function () {

    updateText.innerHTML = "⚙️ Installing Birthday Boy Update...";

    progressArea.style.display = "block";

    let percent = 0;

    const interval = setInterval(function () {

        percent++;

        progressFill.style.width = percent + "%";

        if (percent >= 100) {

            clearInterval(interval);

            updateText.style.display = "none";

            updateResult.style.display = "block";

            updateNextBtn.style.display = "inline-block";

        }

    }, 40);

}, 3000);

}

// =========================================
// UPDATE -> WISH
// =========================================

const wishScene = document.getElementById("wishScene");
const wishNextBtn = document.getElementById("wishNextBtn");
const giftScene = document.getElementById("giftScene");

updateNextBtn.addEventListener("click", function () {

    updateScene.classList.remove("active");
    wishScene.classList.add("active");

});

wishNextBtn.addEventListener("click", function () {

    wishScene.classList.remove("active");
    giftScene.classList.add("active");

});

// =========================================
// GIFT BOX
// =========================================

const giftBox = document.getElementById("giftBox");
const finalScene = document.getElementById("finalScene");

let giftOpened = false;

giftBox.addEventListener("click", function () {

    if (giftOpened) return;

    giftOpened = true;

    giftBox.classList.add("open");

    setTimeout(function () {

        giftScene.classList.remove("active");
        finalScene.classList.add("active");

        createBalloons();
        createHearts();
        createConfetti();

    }, 1200);

});

// =========================================
// BALLOONS
// =========================================

function createBalloons() {

    const container = document.getElementById("floatingBalloons");

    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.background =
            `hsl(${Math.random() * 360},80%,65%)`;

        balloon.style.animationDuration =
            (8 + Math.random() * 6) + "s";

        balloon.style.animationDelay =
            Math.random() * 4 + "s";

        container.appendChild(balloon);

    }

}

// =========================================
// HEARTS
// =========================================

function createHearts() {

    const container = document.getElementById("floatingHearts");

    setInterval(function () {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (18 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 9000);

    }, 400);

}

// =========================================
// CONFETTI
// =========================================

function createConfetti() {

    const container = document.getElementById("confetti");

    container.innerHTML = "";

    const colors = [
        "#ff4d6d",
        "#ffd93d",
        "#4ecdc4",
        "#ffffff",
        "#7b61ff",
        "#6bcf63"
    ];

    for (let i = 0; i < 250; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(piece);

    }

}

// =========================================
// FIREWORKS
// =========================================

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function random(min, max) {

    return Math.random() * (max - min) + min;

}

function firework() {

    const x = random(100, canvas.width - 100);
    const y = random(80, canvas.height / 2);

    for (let i = 0; i < 40; i++) {

        const angle = (Math.PI * 2 / 40) * i;
        const distance = random(30, 90);

        ctx.beginPath();

        ctx.arc(
            x + Math.cos(angle) * distance,
            y + Math.sin(angle) * distance,
            2.5,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `hsl(${Math.random() * 360},100%,60%)`;

        ctx.fill();

    }

}

setInterval(function () {

    if (finalScene.classList.contains("active")) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        firework();

    }

}, 900);