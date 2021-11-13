namespace L03_Sequenzsettings {
    window.addEventListener("load", init);

    function init(): void {
        let fieldset: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset");
        fieldset.addEventListener("change", handleChange);
        let startButton: HTMLElement = <HTMLElement>document.getElementById("Start");
        startButton.addEventListener("click", startGame);
        let formular: HTMLElement = <HTMLElement>document.getElementById("formular");
        formular.addEventListener("submit", function(e: Event) {e.preventDefault()});
    }
}

function handleChange(e: Event): void {
    let target: HTMLInputElement = <HTMLInputElement>e.target;
    let card: NodeListOf<HTMLElement> = document.querySelectorAll(".Spielkarte");
    let font: NodeListOf<HTMLElement> = document.querySelectorAll(".Example");
    if (target.name == "Card-Size") {
        let x: string = target.value;
        let y: number = +x;
        for (let n: number = 0; n < card.length; n++) {
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
            for (let n: number = 0; n < card.length; n++) {
                card[n].style.backgroundColor = target.value;
            }
        }
        if (target.id == "Font-color") {
            for (let n: number = 0; n < card.length; n++) {
                font[n].style.color = target.value;
            }
        }
    }
    if (target.name == "Font") {
        if (target.value == "Verdana") {
            for (let n: number = 0; n < card.length; n++) {
                font[n].style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            }
        }
        if (target.value == "Franklin Gothic Medium") {
            for (let n: number = 0; n < card.length; n++) {
                font[n].style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
            }
        }
        if (target.value == "Courier New") {
            for (let n: number = 0; n < card.length; n++) {
                font[n].style.fontFamily = "'Courier New', Courier, monospace";
            }
        }
    }
    if (target.type == "radio") {
        if (target.value == "easy") {
            let time: number = 5 * card.length;
            console.log(time);
        }
        if (target.value == "medium") {
            let time: number = 4 * card.length;
            console.log(time);
        }
        if (target.value == "hard") {
            let time: number = 3 * card.length;
            console.log(time);
        }
    }
    if (target.type == "text") {
        let sequenz: string[] = target.value.split("");
        let preview: HTMLElement = <HTMLElement>document.querySelector(".Preview");
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        for (let i: number = 0; i < sequenz.length; i++) {
            let newDiv: HTMLElement = document.createElement("div");
            newDiv.classList.add("Spielkarte");
            let content: HTMLElement = document.createElement("p");
            content.innerHTML = sequenz[i];
            content.classList.add("Example");
            newDiv.appendChild(content);
            preview.appendChild(newDiv);
        }
    }
}

function startGame(): void {
    let formData: FormData = new FormData(document.forms[0]);
    for (let entry of formData.entries()) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
}