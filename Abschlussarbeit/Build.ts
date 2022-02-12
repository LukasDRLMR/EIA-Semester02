namespace Endabgabe {
    export class Build extends Food {

        constructor() {
            super();

            this.position = new Vector(crc2.canvas.width * 0.38, crc2.canvas.height * 0.5);
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 150, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(255, 255, 255)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";

            crc2.translate(crc2.canvas.width * 0.38, crc2.canvas.height * 0.44);

            // if (order.includes ("Döner")) {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = "rgb(180, 100, 0)";
            crc2.arc(20, 0, 90, 0, 1.2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.rotate(3.2);
            crc2.arc(20, -120, 90, 0, 1.2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
            // }

            crc2.beginPath();
            for (let i: number = 0; i < 10; i++) {
                let random: number = Math.floor(Math.random() * 10);
                crc2.rotate(random);
                console.log(random);
                crc2.fillStyle = "rgb(0, 200, 0)";
                crc2.fillRect(0, 0, 100, 20);
            }

            crc2.restore();
        }
    }
}