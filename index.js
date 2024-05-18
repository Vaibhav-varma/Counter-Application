const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

function updateCountColor() {
    let valueClass = value.classList;
    
    if(count > 0) {
        value.classList.remove(valueClass);
        value.classList.add("green");
    } else if(count < 0) {
        value.classList.remove(valueClass);
        value.classList.add("red");
    } else {
        value.classList.remove(valueClass);
        value.classList.add("black");
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const button = event.target.id;
        if(button === "increase") {
            count++;
            value.textContent = count;
        } else if(button === "decrease") {
            count--;
            value.textContent = count;
        } else {
            count = 0;
            value.textContent = count;
            
        }
        updateCountColor();
    });
});








