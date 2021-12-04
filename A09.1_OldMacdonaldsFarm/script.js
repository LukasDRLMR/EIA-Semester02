"use strict";
var A09_1_OldMacdonaldsFarm;
(function (A09_1_OldMacdonaldsFarm) {
    window.addEventListener("load", handelLoad);
    A09_1_OldMacdonaldsFarm.golden = 0.55;
    let animals = [];
    function handelLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_1_OldMacdonaldsFarm.crc2 = canvas.getContext("2d");
        drawBG();
        drawSun({ x: A09_1_OldMacdonaldsFarm.crc2.canvas.width / 2, y: A09_1_OldMacdonaldsFarm.crc2.canvas.height / 2 });
        drawFence();
        drawAnimal();
        simulateDay();
    }
    function drawBG() {
        A09_1_OldMacdonaldsFarm.crc2.save();
        let gradient = A09_1_OldMacdonaldsFarm.crc2.createLinearGradient(0, 0, 0, A09_1_OldMacdonaldsFarm.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.45, "white");
        gradient.addColorStop(A09_1_OldMacdonaldsFarm.golden, "rgb(200, 200, 25");
        gradient.addColorStop(1, "green");
        A09_1_OldMacdonaldsFarm.crc2.fillStyle = gradient;
        A09_1_OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_1_OldMacdonaldsFarm.crc2.canvas.width, A09_1_OldMacdonaldsFarm.crc2.canvas.height);
        A09_1_OldMacdonaldsFarm.crc2.restore();
    }
    function drawSun(_position) {
        let r1 = 100;
        let r2 = 300;
        let gradient = A09_1_OldMacdonaldsFarm.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(55, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A09_1_OldMacdonaldsFarm.crc2.save();
        A09_1_OldMacdonaldsFarm.crc2.translate(_position.x, _position.y);
        A09_1_OldMacdonaldsFarm.crc2.fillStyle = gradient;
        A09_1_OldMacdonaldsFarm.crc2.arc(0, 0, r2, 0, Math.PI, true);
        A09_1_OldMacdonaldsFarm.crc2.fill();
        A09_1_OldMacdonaldsFarm.crc2.restore();
    }
    function drawFence() {
        A09_1_OldMacdonaldsFarm.crc2.save();
        A09_1_OldMacdonaldsFarm.crc2.translate(0, A09_1_OldMacdonaldsFarm.crc2.canvas.height / 2);
        A09_1_OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
        A09_1_OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_1_OldMacdonaldsFarm.crc2.canvas.width, 5);
        for (let n = 0; n < 2; n++) {
            A09_1_OldMacdonaldsFarm.crc2.translate(0, -20);
            A09_1_OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
            A09_1_OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_1_OldMacdonaldsFarm.crc2.canvas.width, 5);
        }
        A09_1_OldMacdonaldsFarm.crc2.translate(5, -10);
        for (let n = 0; n < 50; n++) {
            A09_1_OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
            A09_1_OldMacdonaldsFarm.crc2.fillRect(0, 0, 5, 70);
            A09_1_OldMacdonaldsFarm.crc2.translate(50, 0);
        }
        A09_1_OldMacdonaldsFarm.crc2.restore();
    }
    function drawAnimal() {
        for (let index = 0; index < 2; index++) {
            let animal = new A09_1_OldMacdonaldsFarm.Animal();
            animals.push(animal);
            console.log(animals);
        }
    }
    function simulateDay() {
        let lyrics = document.getElementById("Text");
        setTimeout(() => {
            lyrics.innerHTML = "Old MACDONALD had a farm <br> E-I-E-I-O";
        }, 3000);
        setTimeout(() => {
            lyrics.innerHTML = "And on his farm he had a cow <br> E-I-E-I-O";
        }, 5000);
        setTimeout(() => {
            lyrics.innerHTML = "With a moo moo here";
        }, 8000);
        setTimeout(() => {
            lyrics.innerHTML = "And a moo moo there";
        }, 11000);
        setTimeout(() => {
            lyrics.innerHTML = "Here a moo, there a moo";
        }, 14000);
        setTimeout(() => {
            lyrics.innerHTML = "Everywhere a moo moo";
        }, 17000);
        setTimeout(() => {
            lyrics.innerHTML = "Old MacDonald had a farm <br> E-I-E-I-O";
        }, 21000);
    }
})(A09_1_OldMacdonaldsFarm || (A09_1_OldMacdonaldsFarm = {}));
//# sourceMappingURL=script.js.map