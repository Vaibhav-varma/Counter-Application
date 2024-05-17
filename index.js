const countInfo = document.getElementById("count");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

let count = 0;

function updateCountColor() {
    let countInfoClass = countInfo.classList;
    if(count > 0) {
        countInfo.classList.remove(countInfoClass);
        countInfo.classList.add("green");
    } else if(count < 0) {
        countInfo.classList.remove(countInfoClass);
        countInfo.classList.add("red");
    } else {
        countInfo.classList.remove(countInfoClass);
        countInfo.classList.add("black");
    }
}

btnIncrease.addEventListener("click", () => {
    count++;
    console.log(count);
    countInfo.textContent = count;
    updateCountColor();
});

btnDecrease.addEventListener("click", () => {
    count--;
    console.log(count);
    countInfo.textContent = count;
    updateCountColor();
});

btnReset.addEventListener("click", () => {
    count = 0;
    console.log(count);
    countInfo.textContent = count;
    updateCountColor();
});



