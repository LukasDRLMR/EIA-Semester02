namespace Endabgabe {
    export class Staff extends Human {
        public state: WORKSTATE;
        public targeted: boolean;

        constructor() {
            super();

            this.position = new Vector(crc2.canvas.width * 0.25, crc2.canvas.height);
            this.velocity = new Vector(0, 0);
            this.targeted = false;
            this.state = Math.floor(Math.random() * (3 - 0 + 1));
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(0, 0, 255)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.restore();
            console.log(this.state);
        }

        public clicked(): void {
            this.targeted = true;
            this.velocity = new Vector(0, 0);
        }

        public work(): void {
            console.log("Work");
            if (WORKSTATE.PAUSE) {
                this.velocity = Vector.getDifference(new Vector(500, 500), this.position);
            }
            if (WORKSTATE.CASH) {
                this.velocity = Vector.getDifference(new Vector(500, 500), this.position);
            }
            if (WORKSTATE.PREPARATION) {
                this.velocity = Vector.getDifference(new Vector(500, 500), this.position);
            }
            if (WORKSTATE.TOPPING) {
                this.velocity = Vector.getDifference(new Vector(500, 500), this.position);
            }
        }
    }
}