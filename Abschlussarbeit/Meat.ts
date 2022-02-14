namespace Endabgabe {
    export class Meat extends Food {
        
        constructor() {
            super();

            this.positionPrep = new Vector(960, 80);
            this.positionDisplay = new Vector(1030, 40);
            this.capacity = 20;
            this.maxCapacity = 20;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 60, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(140, 60, 0)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "white";
            crc2.fillText("Fleisch", this.positionPrep.x + 30, this.positionPrep.y + 60);
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
                order.push("Meat");
            }
        }
    }
}