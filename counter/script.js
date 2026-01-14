function AddOne() {
    const counterValue = document.getElementById("counter-value");
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

function SubtractOne() {
    const counterValue = document.getElementById("counter-value");
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
}
function AddTen() {
    const counterValue = document.getElementById("counter-value");
    counterValue.textContent = parseInt(counterValue.textContent) + 10;
}
function SubtractTen() {
    const counterValue = document.getElementById("counter-value");
    counterValue.textContent = parseInt(counterValue.textContent) - 10;
}
document.getElementById("increment-btn").addEventListener("click", AddOne);
document.getElementById("decrement-btn").addEventListener("click", SubtractOne);
document.getElementById("increment10-btn").addEventListener("click", AddTen);
document.getElementById("decrement10-btn").addEventListener("click", SubtractTen);
