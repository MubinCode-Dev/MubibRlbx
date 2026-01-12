setTimeout(() => {
    document.getElementById("continueBox").style.display = "block";
}, 8500);

function goStore() {
    window.location.href = "store.html";
}

// Create stars
function createStars() {
    const stars = document.querySelector(".stars");
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = 10 + Math.random() * 20 + "s";
        stars.appendChild(star);
    }
}

window.onload = createStars;
