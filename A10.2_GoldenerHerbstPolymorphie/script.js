"use strict";
// Aufgabe: L09.2 Goldener A08_2_GoldenerHerbst
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 11.12.2021
var A10_2_GoldenerHerbst;
(function (A10_2_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    A10_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
    let golden = 0.66;
    A10_2_GoldenerHerbst.gras = A10_2_GoldenerHerbst.crc2.canvas.height * golden;
    A10_2_GoldenerHerbst.moveables = [];
    let imgData;
    function handleLoad(_event) {
        drawBG();
        drawSun({ x: 100, y: 100 });
        drawMountains({ x: 0, y: A10_2_GoldenerHerbst.gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: A10_2_GoldenerHerbst.gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawTrees({ x: 0, y: A10_2_GoldenerHerbst.gras }, { x: 20, y: 100 });
        drawCloud();
        A10_2_GoldenerHerbst.createPaths();
        drawLeaves();
        drawSquirrel({ x: A10_2_GoldenerHerbst.crc2.canvas.width / 2, y: A10_2_GoldenerHerbst.gras });
        window.setInterval(update, 50);
    }
    function drawBG() {
        let gradient = A10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, A10_2_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "rgb(174, 217, 117)");
        gradient.addColorStop(1, "rgb(148, 128, 0)");
        A10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A10_2_GoldenerHerbst.crc2.fillRect(0, 0, A10_2_GoldenerHerbst.crc2.canvas.width, A10_2_GoldenerHerbst.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = A10_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A10_2_GoldenerHerbst.crc2.save();
        A10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A10_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A10_2_GoldenerHerbst.crc2.fill();
        A10_2_GoldenerHerbst.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        A10_2_GoldenerHerbst.crc2.save();
        A10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A10_2_GoldenerHerbst.crc2.beginPath();
        A10_2_GoldenerHerbst.crc2.moveTo(0, 0);
        A10_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A10_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < A10_2_GoldenerHerbst.crc2.canvas.width);
        A10_2_GoldenerHerbst.crc2.lineTo(x, 0);
        A10_2_GoldenerHerbst.crc2.closePath();
        let gradient = A10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        A10_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A10_2_GoldenerHerbst.crc2.fill();
        A10_2_GoldenerHerbst.crc2.restore();
    }
    function drawTrees(_position, _size) {
        A10_2_GoldenerHerbst.crc2.save();
        A10_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        for (let i = 0; i < 5; i++) {
            let nParticles = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            let radiusParticles = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
            let particle = new Path2D();
            let color = ["rgba(217, 162, 11, 0.7)", "rgba(237, 226, 14, 0.7)", "rgba(219, 237, 55, 0.7)", "rgba(176, 165, 16, 0.7)"];
            let gradient = A10_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, -30, 0);
            gradient.addColorStop(0, "rgb(153, 102, 0)");
            gradient.addColorStop(1, "rgb(102, 0, 0)");
            A10_2_GoldenerHerbst.crc2.save();
            let plantTreex = Math.random() * (A10_2_GoldenerHerbst.crc2.canvas.width - 0 + 1) - 0;
            let plantTreey = Math.random() * ((A10_2_GoldenerHerbst.crc2.canvas.height - _position.y) - 0 + 1) - 0;
            A10_2_GoldenerHerbst.crc2.translate(plantTreex, plantTreey);
            A10_2_GoldenerHerbst.crc2.fillStyle = gradient;
            A10_2_GoldenerHerbst.crc2.fillRect(0, 0, -_size.x, -_size.y);
            A10_2_GoldenerHerbst.crc2.translate(-(_size.x / 2), -_size.y);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A10_2_GoldenerHerbst.crc2.save();
                let random = Math.floor(Math.random() * (3 - 0 + 1) - 0);
                A10_2_GoldenerHerbst.crc2.fillStyle = color[random];
                let x = (Math.random() - 0.5) * 70;
                let y = -(Math.random() * 100);
                A10_2_GoldenerHerbst.crc2.translate(x, y);
                A10_2_GoldenerHerbst.crc2.fill(particle);
                A10_2_GoldenerHerbst.crc2.restore();
            }
            A10_2_GoldenerHerbst.crc2.restore();
        }
        A10_2_GoldenerHerbst.crc2.restore();
        imgData = A10_2_GoldenerHerbst.crc2.getImageData(0, 0, A10_2_GoldenerHerbst.crc2.canvas.width, A10_2_GoldenerHerbst.crc2.canvas.height);
    }
    function drawCloud() {
        let cloud = new A10_2_GoldenerHerbst.Cloud;
        A10_2_GoldenerHerbst.moveables.push(cloud);
    }
    function drawLeaves() {
        do {
            let leaf = new A10_2_GoldenerHerbst.Leaf;
            A10_2_GoldenerHerbst.moveables.push(leaf);
        } while (A10_2_GoldenerHerbst.moveables.length < 9);
    }
    A10_2_GoldenerHerbst.drawLeaves = drawLeaves;
    function drawSquirrel(_position) {
        for (let n = 0; n < 3; n++) {
            let squirrel = new A10_2_GoldenerHerbst.Squirrel;
            A10_2_GoldenerHerbst.moveables.push(squirrel);
        }
    }
    function update() {
        A10_2_GoldenerHerbst.crc2.putImageData(imgData, 0, 0);
        for (let moveable of A10_2_GoldenerHerbst.moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(A10_2_GoldenerHerbst || (A10_2_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map