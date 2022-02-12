namespace Endabgabe {
    export class Sauce extends Food {

        constructor() {
            super();

            this.position = new Vector(1070, 680);
            this.positionDisplay = new Vector(1190, 670);
            this.capacity = 2;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.rect(this.position.x, this.position.y, 100, 70);
            crc2.closePath();
            crc2.fillStyle = "rgb(180, 180, 180)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Soße", this.position.x + 80, this.position.y + 85);
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