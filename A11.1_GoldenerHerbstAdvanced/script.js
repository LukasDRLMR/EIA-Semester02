"use strict";
// Aufgabe: L11.1:GoldenerHerbstAdvanced
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 14.01.2022
var A11_1_GoldenerHerbstAdvanced;
(function (A11_1_GoldenerHerbstAdvanced) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    A11_1_GoldenerHerbstAdvanced.crc2 = canvas.getContext("2d");
    let golden = 0.66;
    A11_1_GoldenerHerbstAdvanced.gras = A11_1_GoldenerHerbstAdvanced.crc2.canvas.height * golden;
    A11_1_GoldenerHerbstAdvanced.moveables = [];
    A11_1_GoldenerHerbstAdvanced.nuts = [];
    let imgData;
    let TASK;
    (function (TASK) {
        TASK[TASK["WAIT"] = 0] = "WAIT";
        TASK[TASK["EAT"] = 1] = "EAT";
    })(TASK = A11_1_GoldenerHerbstAdvanced.TASK || (A11_1_GoldenerHerbstAdvanced.TASK = {}));
    function handleLoad(_event) {
        drawBG();
        drawSun({ x: 100, y: 100 });
        drawMountains({ x: 0, y: A11_1_GoldenerHerbstAdvanced.gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: A11_1_GoldenerHerbstAdvanced.gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawTrees({ x: 0, y: A11_1_GoldenerHerbstAdvanced.gras }, { x: 20, y: 100 });
        drawCloud();
        A11_1_GoldenerHerbstAdvanced.createPaths();
        drawLeaves();
        drawSquirrel(3);
        canvas.addEventListener("click", placeNut);
        window.setInterval(update, 50);
    }
    function drawBG() {
        let gradient = A11_1_GoldenerHerbstAdvanced.crc2.createLinearGradient(0, 0, 0, A11_1_GoldenerHerbstAdvanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "rgb(174, 217, 117)");
        gradient.addColorStop(1, "rgb(148, 128, 0)");
        A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
        A11_1_GoldenerHerbstAdvanced.crc2.fillRect(0, 0, A11_1_GoldenerHerbstAdvanced.crc2.canvas.width, A11_1_GoldenerHerbstAdvanced.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = A11_1_GoldenerHerbstAdvanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A11_1_GoldenerHerbstAdvanced.crc2.save();
        A11_1_GoldenerHerbstAdvanced.crc2.translate(_position.x, _position.y);
        A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
        A11_1_GoldenerHerbstAdvanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A11_1_GoldenerHerbstAdvanced.crc2.fill();
        A11_1_GoldenerHerbstAdvanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        A11_1_GoldenerHerbstAdvanced.crc2.save();
        A11_1_GoldenerHerbstAdvanced.crc2.translate(_position.x, _position.y);
        A11_1_GoldenerHerbstAdvanced.crc2.beginPath();
        A11_1_GoldenerHerbstAdvanced.crc2.moveTo(0, 0);
        A11_1_GoldenerHerbstAdvanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A11_1_GoldenerHerbstAdvanced.crc2.lineTo(x, y);
        } while (x < A11_1_GoldenerHerbstAdvanced.crc2.canvas.width);
        A11_1_GoldenerHerbstAdvanced.crc2.lineTo(x, 0);
        A11_1_GoldenerHerbstAdvanced.crc2.closePath();
        let gradient = A11_1_GoldenerHerbstAdvanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
        A11_1_GoldenerHerbstAdvanced.crc2.fill();
        A11_1_GoldenerHerbstAdvanced.crc2.restore();
    }
    function drawTrees(_position, _size) {
        A11_1_GoldenerHerbstAdvanced.crc2.save();
        A11_1_GoldenerHerbstAdvanced.crc2.translate(_position.x, _position.y);
        for (let i = 0; i < 5; i++) {
            let nParticles = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            let radiusParticles = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
            let particle = new Path2D();
            let color = ["rgba(217, 162, 11, 0.7)", "rgba(237, 226, 14, 0.7)", "rgba(219, 237, 55, 0.7)", "rgba(176, 165, 16, 0.7)"];
            let gradient = A11_1_GoldenerHerbstAdvanced.crc2.createLinearGradient(0, 0, -30, 0);
            gradient.addColorStop(0, "rgb(153, 102, 0)");
            gradient.addColorStop(1, "rgb(102, 0, 0)");
            A11_1_GoldenerHerbstAdvanced.crc2.save();
            let plantTreex = Math.random() * (A11_1_GoldenerHerbstAdvanced.crc2.canvas.width - 0 + 1) - 0;
            let plantTreey = Math.random() * ((A11_1_GoldenerHerbstAdvanced.crc2.canvas.height - _position.y) - 0 + 1) - 0;
            A11_1_GoldenerHerbstAdvanced.crc2.translate(plantTreex, plantTreey);
            A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = gradient;
            A11_1_GoldenerHerbstAdvanced.crc2.fillRect(0, 0, -_size.x, -_size.y);
            A11_1_GoldenerHerbstAdvanced.crc2.translate(-(_size.x / 2), -_size.y);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A11_1_GoldenerHerbstAdvanced.crc2.save();
                let random = Math.floor(Math.random() * (3 - 0 + 1) - 0);
                A11_1_GoldenerHerbstAdvanced.crc2.fillStyle = color[random];
                let x = (Math.random() - 0.5) * 70;
                let y = -(Math.random() * 100);
                A11_1_GoldenerHerbstAdvanced.crc2.translate(x, y);
                A11_1_GoldenerHerbstAdvanced.crc2.fill(particle);
                A11_1_GoldenerHerbstAdvanced.crc2.restore();
            }
            A11_1_GoldenerHerbstAdvanced.crc2.restore();
        }
        A11_1_GoldenerHerbstAdvanced.crc2.restore();
        imgData = A11_1_GoldenerHerbstAdvanced.crc2.getImageData(0, 0, A11_1_GoldenerHerbstAdvanced.crc2.canvas.width, A11_1_GoldenerHerbstAdvanced.crc2.canvas.height);
    }
    function drawCloud() {
        let cloud = new A11_1_GoldenerHerbstAdvanced.Cloud;
        A11_1_GoldenerHerbstAdvanced.moveables.push(cloud);
    }
    function drawLeaves() {
        do {
            let leaf = new A11_1_GoldenerHerbstAdvanced.Leaf;
            A11_1_GoldenerHerbstAdvanced.moveables.push(leaf);
        } while (A11_1_GoldenerHerbstAdvanced.moveables.length < 9);
    }
    A11_1_GoldenerHerbstAdvanced.drawLeaves = drawLeaves;
    function drawSquirrel(_n) {
        for (let n = 0; n < _n; n++) {
            let squirrel = new A11_1_GoldenerHerbstAdvanced.Squirrel;
            A11_1_GoldenerHerbstAdvanced.moveables.push(squirrel);
        }
    }
    A11_1_GoldenerHerbstAdvanced.drawSquirrel = drawSquirrel;
    function placeNut(_e) {
        let nut = new A11_1_GoldenerHerbstAdvanced.Nut(_e.clientX, _e.clientY);
        A11_1_GoldenerHerbstAdvanced.nuts.push(nut);
    }
    function deleteNuts() {
        for (let i = A11_1_GoldenerHerbstAdvanced.nuts.length - 1; i >= 0; i--) {
            if (A11_1_GoldenerHerbstAdvanced.nuts[i].eaten) {
                A11_1_GoldenerHerbstAdvanced.nuts.splice(i, 1);
            }
        }
    }
    function update() {
        A11_1_GoldenerHerbstAdvanced.crc2.putImageData(imgData, 0, 0);
        for (let moveable of A11_1_GoldenerHerbstAdvanced.moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let nut of A11_1_GoldenerHerbstAdvanced.nuts) {
            nut.move(1 / 5);
            nut.draw();
        }
        deleteNuts();
    }
})(A11_1_GoldenerHerbstAdvanced || (A11_1_GoldenerHerbstAdvanced = {}));
//# sourceMappingURL=script.js.map