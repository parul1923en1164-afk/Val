const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const celebration = document.getElementById("celebration");

// NO button runs away 😏
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button celebration 💖
yesBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    celebration.classList.remove("hidden");

    for (let i = 0; i < 40; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    celebration.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
