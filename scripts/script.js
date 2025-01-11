const texts = [
    "меня зовут...",
    "моё имя...",
    "я...",
    "Моё Имя Есть.",
    "мой псевдоним..."
];

const cursor = document.getElementById("cursor");
const name = document.getElementById("my-name");

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function typeText(text) {
    const textElement = document.getElementById("text");
    textElement.textContent = "";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
}

const randomText = getRandomText();
typeText(randomText);