"use strict";
var L03_Sequenzsettings;
(function (L03_Sequenzsettings) {
    window.addEventListener("load", init);
    function init() {
        let fieldset = document.querySelector("fieldset");
        fieldset.addEventListener("change", handleChange);
        let startButton = document.getElementById("Start");
        startButton.addEventListener("click", startGame);
        let formular = document.getElementById("formular");
        formular.addEventListener("submit", function (e) { e.preventDefault(); });
    }
})(L03_Sequenzsettings || (L03_Sequenzsettings = {}));
function handleChange(e) {
    let target = e.target;
    let card = document.querySelectorAll(".Spielkarte");
    let font = document.querySelectorAll(".Example");
    if (target.name == "Card-Size") {
        let x = target.value;
        let y = +x;
        for (let n = 0; n < card.length; n++) {
            card[n].style.width = (130 * y).toString() + "px";
            card[n].style.height = (200 * y).toString() + "px";
            card[n].style.borderRadius = (20 * y).toString() + "px";
            font[n].style.fontSize = (50 * y).toString() + "px";
        }
    }
    if (target.type == "color") {
        if (target.id == "BG-color") {
            document.body.style.background = target.value;
        }
        if (target.id == "Card-color") {
            for (let n = 0; n < card.length; n++) {
                card[n].style.backgroundColor = target.value;
            }
        }
        if (target.id == "Font-color") {
            for (let n = 0; n < card.length; n++) {
                font[n].style.color = target.value;
            }
        }
    }
    if (target.name == "Font") {
        if (target.value == "Verdana") {
            for (let n = 0; n < card.length; n++) {
                font[n].style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            }
        }
        if (target.value == "Franklin Gothic Medium") {
            for (let n = 0; n < card.length; n++) {
                font[n].style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
            }
        }
        if (target.value == "Courier New") {
            for (let n = 0; n < card.length; n++) {
                font[n].style.fontFamily = "'Courier New', Courier, monospace";
            }
        }
    }
    if (target.type == "radio") {
        if (target.value == "easy") {
            let time = 5 * card.length;
            console.log(time);
        }
        if (target.value == "medium") {
            let time = 4 * card.length;
            console.log(time);
        }
        if (target.value == "hard") {
            let time = 3 * card.length;
            console.log(time);
        }
    }
    if (target.type == "text") {
        let sequenz = target.value.split("");
        let preview = document.querySelector(".Preview");
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        for (let i = 0; i < sequenz.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("Spielkarte");
            let content = document.createElement("p");
            content.innerHTML = sequenz[i];
            content.classList.add("Example");
            newDiv.appendChild(content);
            preview.appendChild(newDiv);
        }
    }
}
function startGame() {
    let formData = new FormData(document.forms[0]);
    for (let entry of formData.entries()) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
}
//# sourceMappingURL=script.js.map