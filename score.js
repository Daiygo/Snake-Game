let score = 0

export function updatescore() {
    document.getElementById("score").textContent = score;
}

export function eatFood() {
    return score++;
    updatescore();
}

