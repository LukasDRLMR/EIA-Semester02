namespace L8_Canvas_GoldenerHerbst {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.66;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let gras: number = crc2.canvas.height * golden;

        drawBG();
        drawSun({ x: 100, y: 100 });
        drawCloud({ x: crc2.canvas.width, y: 130 }, { x: 200, y: 90 });
        drawMountains({ x: 0, y: gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawBushes({ x: 0, y: gras });
        drawTrees({ x: 0, y: gras }, { x: 20, y: 100 });
        // drawSquirrel({ x: crc2.canvas.width / 2, y: gras });
    }

    function drawBG(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "green");

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

    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 100;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        let sky: number = Math.random() * (_position.x - 0 + 1) + 0;
        console.log(sky);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(sky, _position.y );
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
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

    function drawBushes(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        for (let n: number = 0; n < 5; n++) {
            let nParticles: number = Math.floor(Math.random() * (20 - 10 + 1) + 10);
            let radiusParticles: number = Math.floor(Math.random() * 30 - 25 + 1) + 25;
            let particle: Path2D = new Path2D; 

            crc2.save();
            let plantTreex: number = Math.random() * (crc2.canvas.width - 0 + 1) - 0;
            let plantTreey: number = Math.random() * ((crc2.canvas.height - _position.y) - 0 + 1) - 0;
            crc2.translate(plantTreex, plantTreey);

            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.fillStyle = "rgba(191, 175, 0)";
                let x: number = (Math.random() - 0.5) * 30;
                let y: number = - (Math.random() * 20);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
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
    }

    // function drawSquirrel(_position: Vector): void {
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);

    //     crc2.fillStyle = "brown";
    //     crc2.beginPath();
    //     crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
    //     crc2.fill();
        
    //     crc2.translate(-40, -75);

    //     crc2.beginPath();
    //     crc2.arc(0, 0, 40, 0, 2 * Math.PI);
    //     crc2.fill();

    //     crc2.translate(-20, -20);
    //     crc2.beginPath();
    //     crc2.moveTo(0, 0);
    //     crc2.lineTo(20, -40);
    //     crc2.lineTo(40, 0);
    //     crc2.fill();

    //     crc2.translate(10, 80);
    //     crc2.beginPath();
    //     crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
    //     crc2.fill();

        
    // }
}