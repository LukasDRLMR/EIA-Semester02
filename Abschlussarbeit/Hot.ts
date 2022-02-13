namespace Endabgabe {
    export class Hot extends Food {

        constructor() {
            super();

            this.positionPrep = new Vector(1120, 850);
            this.positionDisplay = new Vector(1190, 800);
            this.positionMat = new Vector(120, 900);
            this.capacity = 20;
            this.maxCapacity = 20;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(100, 0, 0)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "white";
            crc2.fillText("Scharf", this.positionPrep.x + 30, this.positionPrep.y + 40);
            crc2.restore();

            for (let i: number = 0; i < 2; i++) {
                for (let j: number = 0; j < 3; j++) {
                    crc2.save();
                    crc2.translate(this.positionMat.x + (50 * j), this.positionMat.y + (50 * i));
                    crc2.beginPath();
                    this.pathGround.arc(0, 0, 20, 0, Math.PI * 2);
                    crc2.closePath();
                    crc2.fillStyle = "rgb(100, 0, 0)";
                    crc2.fill(this.pathGround);
                    crc2.stroke(this.pathGround);
                    crc2.closePath();
                    crc2.restore();
                }
            }

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
                order.push("Hot");
            }
        }
    }
}