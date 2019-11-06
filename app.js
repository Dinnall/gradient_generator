let css = document.querySelector("code");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random");

const setRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const setGradient = () => {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

setGradient();

randomBtn.addEventListener("click", () => {
    color1.value = setRandomColor();
    color2.value = setRandomColor();
    setGradient();
});

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);