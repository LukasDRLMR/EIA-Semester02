namespace Endabgabe {
    export class Hot extends Food {

        constructor() {
            super();

            this.position = new Vector(1120, 850);
            this.positionDisplay = new Vector(1190, 800);
            this.capacity = 2;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(100, 0, 0)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "white";
            crc2.fillText("Scharf", this.position.x + 30, this.position.y + 40);
            crc2.restore();
            
            crc2.save();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "white";
            crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            crc2.strokeRect(0, 0, 10, 100);
            crc2.fillRect(0, 0, 10, 100);
            crc2.fillStyle = "rgb(70, 70, 70)";
            crc2.fillRect(0, 0, 10, 20 * this.capacity);
            crc2.restore();
        }
    }
}