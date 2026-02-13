// Typewriter Effect
const message = "Thanks for being my Valentine ❤️";
let i = 0;

function typing() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "fall 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

function openPopup(message) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-message").innerText = message;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close if clicked outside the popup
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}



setInterval(createHeart, 400);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

window.addEventListener("click", function () {
    const music = document.getElementById("bg-music");
    music.muted = false;
    music.play();
});
