namespace L08_GenerativeKunst {
    window.addEventListener("load", () => {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        let array: number[] = [];
        let x: number = 0;

        for (let i: number = 0; i < 1000; i++) {
            for (let n: number = 0; n < 4; n++) {
                let variable: number = (Math.random() * (1000 - -1000 + 1)) + -1000;
                array.push(variable);
            } 
            x = x + 2;               
            array.push(x);
            draw(array[0], array[1], array[2], array[3], array[4]);
            array = [];
            console.log(array);
        }

        function draw(_p1x: number, _p1y: number, _p2x: number, _p2y: number, _x: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, 0);
            crc2.bezierCurveTo(_p1x, _p1y, _p2x, _p2y, _x, 1000);
            crc2.stroke();   
            crc2.strokeStyle = "rgba(0, 0, 0, 0.3";
            crc2.globalCompositeOperation = "lighter";
        }
    });
}