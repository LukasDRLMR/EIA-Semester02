namespace A11_1_GoldenerHerbstAdvanced {
    export class Nut extends Moveable {
        public targeted: boolean;
        public eaten: boolean;
        public readyToBeEaten: boolean;
        public position: Vector;
        protected stop: number;

        constructor(clientX: number, clientY: number) {
            super();

            this.targeted = false;
            this.eaten = false;
            this.position = new Vector(clientX, clientY);
            this.stop = Math.floor(Math.random() * (crc2.canvas.height - (gras - 20)) + (gras - 20));
            if (clientY < gras) {
                this.readyToBeEaten = false;
            } else {
                this.readyToBeEaten = true;
            }
        }

        public move(_timeslice: number): void {
            if (this.readyToBeEaten == false) {
                if (this.position.y < this.stop) {
                    this.velocity = Vector.randomY(50, 100);
                    let offset: Vector = this.velocity.copy();
                    offset.scale(_timeslice);
                    this.position.add(offset);
                }
                if (this.position.y > this.stop) {
                    this.readyToBeEaten = true;
                }
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(179, 107, 0)";
            crc2.fill();

            crc2.translate(0, -3);
            crc2.beginPath();
            crc2.arc(0, 0, 18, 0, Math.PI, true);
            crc2.closePath();
            crc2.fillStyle = "rgb(54, 32, 0)";
            crc2.fill();

            crc2.restore();
        }
    }
} 