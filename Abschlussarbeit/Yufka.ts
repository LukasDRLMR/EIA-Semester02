namespace Endabgabe {
    export class Yufka extends Food {

        constructor() {
            super();

            this.position = new Vector(645, 80);
            this.positionDisplay = new Vector(710, 40);
            this.capacity = 10;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(200, 150, 20)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Yufka", this.position.x, this.position.y + 55);
            crc2.restore();

            crc2.save();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "rgb(70, 70, 70)";
            crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            crc2.strokeRect(0, 0, 10, 100);
            crc2.fillRect(0, 0, 10, 100);
            crc2.fillStyle = "white";
            crc2.fillRect(0, 100, 10, -10 * this.capacity);
            crc2.restore();
        }

        public clicked(_object: number): void {
            if (this.capacity > 0) {
                super.clicked(_object);
                order.push("Yufka");
            }
        }
    }
}