namespace Endabgabe {
    export class Tomato extends Food {

        constructor() {
            super();

            this.positionPrep = new Vector(1120, 590);
            this.positionDisplay = new Vector(1190, 540);
            this.positionMat = new Vector(120, 660);
            this.capacity = 5;
            this.maxCapacity = 5;
        }

        public draw(): void {
            //Zutat
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(200, 0, 0)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";
            crc2.fillText("Tomaten", this.positionPrep.x + 20, this.positionPrep.y + 45);
            crc2.restore();

            //Material
            crc2.save();
            crc2.beginPath();
            this.pathGround.arc(this.positionMat.x, this.positionMat.y, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(200, 0, 0)";
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
                order.push("Tomato");
            }
        }
    }
}