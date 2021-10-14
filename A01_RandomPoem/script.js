"use strict";
//Variablen
let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objekt = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
const begin = document.getElementById("start");
begin.addEventListener("click", getVerse);
function getVerse() {
    if (subject.length != 0) {
        for (let i = subject.length; i != 0; i--) {
            let min = 0;
            let max = praedikat.length - 1;
            let index = Math.floor(Math.random() * (max - min + 1)) + min;
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
//# sourceMappingURL=script.js.map