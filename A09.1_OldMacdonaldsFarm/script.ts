namespace A09_1_OldMacdonaldsFarm {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handelLoad);

    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.55;

    let animals: Animal[] = [];

    function handelLoad(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawBG();
        drawSun({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 });
        drawFence();
        drawAnimal();
        simulateDay();
    }

    function drawBG(): void {
        crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.45, "white");
        gradient.addColorStop(golden, "rgb(200, 200, 25");
        gradient.addColorStop(1, "green");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        let r1: number = 100;
        let r2: number = 300;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(55, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, Math.PI, true);
        crc2.fill();
        crc2.restore();
    }

    function drawFence(): void {
        crc2.save();
        crc2.translate(0, crc2.canvas.height / 2);
        crc2.fillStyle = "rgb(90, 50, 30)";
        crc2.fillRect(0, 0, crc2.canvas.width, 5);
        for (let n: number = 0; n < 2; n++) {
            crc2.translate(0, -20);
            crc2.fillStyle = "rgb(90, 50, 30)";
            crc2.fillRect(0, 0, crc2.canvas.width, 5);
        }
        crc2.translate(5, -10);
        for (let n: number = 0; n < 50; n++) {
            crc2.fillStyle = "rgb(90, 50, 30)";
            crc2.fillRect(0, 0, 5, 70);
            crc2.translate(50, 0);
        }
        crc2.restore();
    }

    function drawAnimal(): void {
        for (let index: number = 0; index < 2; index++) {
            let animal: Animal = new Animal();
            animals.push(animal);
            console.log(animals);
        }
    }
    
    function simulateDay(): void {
        let lyrics: HTMLSpanElement = document.getElementById("Text")!;
        setTimeout(() => {
            lyrics.innerHTML = "Old MACDONALD had a farm <br> E-I-E-I-O";
        },         3000);
        setTimeout(() => {
            lyrics.innerHTML = "And on his farm he had a cow <br> E-I-E-I-O";
        },         5000);
        setTimeout(() => {
            lyrics.innerHTML = "With a moo moo here";
        },         8000);
        setTimeout(() => {
            lyrics.innerHTML = "And a moo moo there";
        },         11000);
        setTimeout(() => {
            lyrics.innerHTML = "Here a moo, there a moo";
        },         14000);
        setTimeout(() => {
            lyrics.innerHTML = "Everywhere a moo moo";
        },         17000);
        setTimeout(() => {
            lyrics.innerHTML = "Old MacDonald had a farm <br> E-I-E-I-O";
        },         21000);
    }
}