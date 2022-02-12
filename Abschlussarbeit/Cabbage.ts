namespace Endabgabe {
    export class Cabbage extends Food {

        constructor() {
            super();

            this.positionPrep = new Vector(1120, 330);
            this.positionDisplay = new Vector(1190, 280);
            this.positionMat = new Vector(120, 360);
            this.capacity = 5;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(230, 230, 230)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Kraut", this.positionPrep.x + 30, this.positionPrep.y + 45);
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(230, 230, 230)";
            crc2.fill(this.pathGround);
            crc2.stroke(this.pathGround);
            crc2.closePath();
            crc2.restore();
            
            crc2.save();
            crc2.strokeStyle = "white";
            crc2.fillStyle = "rgb(70, 70, 70)";
            crc2.translate(this.positionDisplay.x, this.positionDisplay.y);
            crc2.strokeRect(0, 0, 10, 100);
            crc2.fillRect(0, 0, 10, 100);
            crc2.fillStyle = "white";
            crc2.fillRect(0, 100, 10, -20 * this.capacity);
            crc2.restore();
        }

        public clicked(_object: number): void {
            if (this.capacity > 0) {
                super.clicked(_object);
                order.push("Cabbage");
            }
        }
    }
}