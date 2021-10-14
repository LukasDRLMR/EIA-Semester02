//Variablen
let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objekt: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

const begin: HTMLElement = <HTMLElement>document.getElementById("start");

begin.addEventListener("click", getVerse);

function getVerse(): void {
    if (subject.length != 0) {
        for (let i: number = subject.length; i != 0; i--) {
            let min: number = 0;
            let max: number = praedikat.length - 1;
            let index: number = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(subject[index] + " " + praedikat[index] + " " + objekt[index]);
            subject.splice(index, 1);
            praedikat.splice(index, 1);
            objekt.splice(index, 1);
        }
    }
    else {
        console.clear();
        subject.push("Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore");
        praedikat.push("braut", "liebt", "studiert", "hasst", "zaubert", "zerstört");
        objekt.push("Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren");
        getVerse();
    }
}

