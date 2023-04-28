

const increaseBtn = document.getElementById("increase-font");
const decreaseBtn = document.getElementById("decrease-font");
const content = document.querySelector("body");
let currentFontSize = 16; 

increaseBtn.addEventListener("click", () => {
    currentFontSize += 2;
    content.style.fontSize = `${currentFontSize}px`;
});

decreaseBtn.addEventListener("click", () => {
    currentFontSize -= 2;
    content.style.fontSize = `${currentFontSize}px`;
});

const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", function() {
	document.body.classList.toggle("dark-mode");
	if (document.body.classList.contains("dark-mode")) {
		changeColorButton.innerHTML = "Mudar para modo claro";
	} else {
		changeColorButton.innerHTML = "Mudar para modo escuro";
	}
});
