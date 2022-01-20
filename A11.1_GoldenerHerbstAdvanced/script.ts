// Aufgabe: L11.1:GoldenerHerbstAdvanced
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 14.01.2022

namespace A11_1_GoldenerHerbstAdvanced {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    let golden: number = 0.66;
    export let gras: number = crc2.canvas.height * golden;
    export let moveables: Moveable[] = [];
    export let nuts: Nut[] = [];

    let imgData: ImageData;

    export enum TASK {
        WAIT,
        EAT
    }

    function handleLoad(_event: Event): void {
        drawBG();
        drawSun({ x: 100, y: 100 });
        drawMountains({ x: 0, y: gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawTrees({ x: 0, y: gras }, { x: 20, y: 100 });
        drawCloud();
        createPaths();
        drawLeaves();
        drawSquirrel(3);
        canvas.addEventListener("click", placeNut);

        window.setInterval(update, 50);
    }

    function drawBG(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "rgb(174, 217, 117)");
        gradient.addColorStop(1, "rgb(148, 128, 0)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        let r1: number = 20;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 10;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawTrees(_position: Vector, _size: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);

        for (let i: number = 0; i < 5; i++) {
            let nParticles: number = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            let radiusParticles: number = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
            let particle: Path2D = new Path2D();
            let color: string[] = ["rgba(217, 162, 11, 0.7)", "rgba(237, 226, 14, 0.7)", "rgba(219, 237, 55, 0.7)", "rgba(176, 165, 16, 0.7)"];
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, -30, 0);
            gradient.addColorStop(0, "rgb(153, 102, 0)");
            gradient.addColorStop(1, "rgb(102, 0, 0)");

            crc2.save();
            let plantTreex: number = Math.random() * (crc2.canvas.width - 0 + 1) - 0;
            let plantTreey: number = Math.random() * ((crc2.canvas.height - _position.y) - 0 + 1) - 0;
            crc2.translate(plantTreex, plantTreey);

            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, -_size.x, -_size.y);
            crc2.translate(-(_size.x / 2), -_size.y);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let random: number = Math.floor(Math.random() * (3 - 0 + 1) - 0);
                crc2.fillStyle = color[random];
                let x: number = (Math.random() - 0.5) * 70;
                let y: number = - (Math.random() * 100);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
        crc2.restore();

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawCloud(): void {
        let cloud: Cloud = new Cloud;
        moveables.push(cloud);
    }

    export function drawLeaves(): void {
        do {
            let leaf: Leaf = new Leaf;
            moveables.push(leaf);
        } while (moveables.length < 9);

    }

    export function drawSquirrel(_n: number): void {
        for (let n: number = 0; n < _n; n++) {
            let squirrel: Squirrel = new Squirrel;
            moveables.push(squirrel);
        }
    }

    function placeNut(_e: MouseEvent): void {
        let nut: Nut = new Nut(_e.clientX, _e.clientY);
        nuts.push(nut);
    }

    function deleteNuts(): void {
        for (let i: number = nuts.length - 1; i >= 0; i--) {
            if (nuts[i].eaten) {
                nuts.splice(i, 1);
            }
        }
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        for (let nut of nuts) {
            nut.move(1 / 5);
            nut.draw();
        }

        deleteNuts();
    }
}