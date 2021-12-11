"use strict";
// Aufgabe: L09.2 Goldener A08_2_GoldenerHerbst
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 11.12.2021
var A08_2_GoldenerHerbst;
(function (A08_2_GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let golden = 0.66;
    let clouds = [];
    A08_2_GoldenerHerbst.leaves = [];
    A08_2_GoldenerHerbst.crc2 = canvas.getContext("2d");
    let imgData;
    function handleLoad(_event) {
        let gras = A08_2_GoldenerHerbst.crc2.canvas.height * golden;
        drawBG();
        drawSun({ x: 100, y: 100 });
        drawCloud();
        drawMountains({ x: 0, y: gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawTrees({ x: 0, y: gras }, { x: 20, y: 100 });
        drawSquirrel({ x: A08_2_GoldenerHerbst.crc2.canvas.width / 2, y: gras });
        A08_2_GoldenerHerbst.createPaths();
        drawLeaves();
        window.setInterval(update, 50);
    }
    function drawBG() {
        let gradient = A08_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, A08_2_GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "rgb(174, 217, 117)");
        gradient.addColorStop(1, "rgb(148, 128, 0)");
        A08_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A08_2_GoldenerHerbst.crc2.fillRect(0, 0, A08_2_GoldenerHerbst.crc2.canvas.width, A08_2_GoldenerHerbst.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 100;
        let gradient = A08_2_GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A08_2_GoldenerHerbst.crc2.save();
        A08_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A08_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A08_2_GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.restore();
    }
    function drawCloud() {
        let cloud = new A08_2_GoldenerHerbst.Cloud;
        clouds.push(cloud);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 10;
        let stepMax = 50;
        let x = 0;
        A08_2_GoldenerHerbst.crc2.save();
        A08_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.moveTo(0, 0);
        A08_2_GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            A08_2_GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < A08_2_GoldenerHerbst.crc2.canvas.width);
        A08_2_GoldenerHerbst.crc2.lineTo(x, 0);
        A08_2_GoldenerHerbst.crc2.closePath();
        let gradient = A08_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        A08_2_GoldenerHerbst.crc2.fillStyle = gradient;
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.restore();
    }
    function drawTrees(_position, _size) {
        A08_2_GoldenerHerbst.crc2.save();
        A08_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        for (let i = 0; i < 5; i++) {
            let nParticles = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            let radiusParticles = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
            let particle = new Path2D();
            let color = ["rgba(217, 162, 11, 0.7)", "rgba(237, 226, 14, 0.7)", "rgba(219, 237, 55, 0.7)", "rgba(176, 165, 16, 0.7)"];
            let gradient = A08_2_GoldenerHerbst.crc2.createLinearGradient(0, 0, -30, 0);
            gradient.addColorStop(0, "rgb(153, 102, 0)");
            gradient.addColorStop(1, "rgb(102, 0, 0)");
            A08_2_GoldenerHerbst.crc2.save();
            let plantTreex = Math.random() * (A08_2_GoldenerHerbst.crc2.canvas.width - 0 + 1) - 0;
            let plantTreey = Math.random() * ((A08_2_GoldenerHerbst.crc2.canvas.height - _position.y) - 0 + 1) - 0;
            A08_2_GoldenerHerbst.crc2.translate(plantTreex, plantTreey);
            A08_2_GoldenerHerbst.crc2.fillStyle = gradient;
            A08_2_GoldenerHerbst.crc2.fillRect(0, 0, -_size.x, -_size.y);
            A08_2_GoldenerHerbst.crc2.translate(-(_size.x / 2), -_size.y);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            for (let drawn = 0; drawn < nParticles; drawn++) {
                A08_2_GoldenerHerbst.crc2.save();
                let random = Math.floor(Math.random() * (3 - 0 + 1) - 0);
                A08_2_GoldenerHerbst.crc2.fillStyle = color[random];
                let x = (Math.random() - 0.5) * 70;
                let y = -(Math.random() * 100);
                A08_2_GoldenerHerbst.crc2.translate(x, y);
                A08_2_GoldenerHerbst.crc2.fill(particle);
                A08_2_GoldenerHerbst.crc2.restore();
            }
            A08_2_GoldenerHerbst.crc2.restore();
        }
        A08_2_GoldenerHerbst.crc2.restore();
    }
    function drawLeaves() {
        do {
            let leaf = new A08_2_GoldenerHerbst.Leaf;
            A08_2_GoldenerHerbst.leaves.push(leaf);
        } while (A08_2_GoldenerHerbst.leaves.length < 7);
    }
    A08_2_GoldenerHerbst.drawLeaves = drawLeaves;
    function update() {
        A08_2_GoldenerHerbst.crc2.putImageData(imgData, 0, 0);
        for (let cloud of clouds) {
            cloud.move(1 / 100);
            cloud.draw(70);
        }
        for (let leaf of A08_2_GoldenerHerbst.leaves) {
            leaf.move(1 / 30);
            leaf.draw();
        }
    }
    function drawSquirrel(_position) {
        A08_2_GoldenerHerbst.crc2.save();
        A08_2_GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A08_2_GoldenerHerbst.crc2.scale(0.5, 0.5);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(-40, -75);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(-10, -10);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "white";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "black";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(-10, -10);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.moveTo(0, 0);
        A08_2_GoldenerHerbst.crc2.lineTo(20, -40);
        A08_2_GoldenerHerbst.crc2.lineTo(40, 0);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(10, 80);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(40, 70);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.translate(50, 0);
        A08_2_GoldenerHerbst.crc2.beginPath();
        A08_2_GoldenerHerbst.crc2.moveTo(0, 0);
        A08_2_GoldenerHerbst.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
        A08_2_GoldenerHerbst.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
        A08_2_GoldenerHerbst.crc2.closePath();
        A08_2_GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A08_2_GoldenerHerbst.crc2.fill();
        A08_2_GoldenerHerbst.crc2.restore();
        imgData = A08_2_GoldenerHerbst.crc2.getImageData(0, 0, A08_2_GoldenerHerbst.crc2.canvas.width, A08_2_GoldenerHerbst.crc2.canvas.height);
    }
})(A08_2_GoldenerHerbst || (A08_2_GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map