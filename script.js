const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const stepEl = document.querySelector(".step");

let activeStep = 1;

prev.addEventListener("click", () => {
    activeStep--;
    if (activeStep < 1) {
        activeStep = 1;
    }
    update();
});

next.addEventListener("click", () => {
    activeStep++;
    if (activeStep > circles.length) {
        activeStep = circles.length;
    }
    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if (idx < activeStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (activeStep === 1) {
        prev.disabled = true;
    } else if (activeStep === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    stepEl.innerText = activeStep;
}
