namespace Endabgabe {
    export class Sauce extends Food {

        constructor() {
            super();

            this.positionPrep = new Vector(1070, 680);
            this.positionDisplay = new Vector(1190, 670);
            this.positionMat = new Vector(180, 800);
            this.capacity = 20;
            this.maxCapacity = 20;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.rect(this.positionPrep.x, this.positionPrep.y, 100, 70);
            crc2.closePath();
            crc2.fillStyle = "rgb(180, 180, 180)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Soße", this.positionPrep.x + 80, this.positionPrep.y + 85);
            crc2.restore();

            crc2.save();
            crc2.fillStyle = "rgb(180, 180, 180)";
            crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 50, 0, 2 * Math.PI);
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
            crc2.fillRect(0, 100, 10, -5 * this.capacity);
            crc2.restore();
        }

        public clicked(_object: number): void {
            if (this.capacity > 0) {
                super.clicked(_object);
                order.push("Sauce");
            }
        }
    }
}