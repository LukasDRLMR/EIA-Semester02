namespace A11_1_GoldenerHerbstAdvanced {
    export class Squirrel extends Moveable {
        private task: TASK;

        constructor() {
            super();

            this.position = new Vector(Vector.random(crc2.canvas.width, 0), Vector.random(crc2.canvas.height, gras));
            this.velocity = Vector.randomX(100, 200);
            this.task = TASK.WAIT;
        }

        public move(_timeslice: number, _position?: Vector): void {
            super.move(_timeslice);
            if (Math.random() < 0.01 && !_position && this.task == TASK.WAIT) {
                this.velocity = new Vector (Vector.random(-200, 200), Vector.random(-200, 200));
            }
            if (this.position.y <= gras) {
                this.velocity = new Vector(this.velocity.x, Vector.random(0, 200));
            }
            if (this.position.y > crc2.canvas.height - 10) {
                this.velocity = new Vector (this.velocity.x, Vector.random(-200, 0));
            }
            if (nuts.length > 0) {
                for (let i: number = 0; i < nuts.length; i++) {
                    if (nuts[i].targeted == false && this.task == TASK.WAIT) {
                        nuts[i].targeted = true;
                        this.move(1 / 50, nuts[i].position);
                    }
                }
            }
            if (_position) {
                this.task = TASK.EAT;
                this.velocity = new Vector(_position.x - this.position.x, _position.y - this.position.y);
                if (this.position == _position) {
                    this.velocity = new Vector(0, 0);
                }
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.3, 0.3);

            if (this.velocity.x > 0)
                crc2.scale(-1, 1);

            crc2.beginPath();
            crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(122, 63, 0)";
            crc2.fill();

            crc2.translate(-40, -75);
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(122, 63, 0)";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(20, -40);
            crc2.lineTo(40, 0);
            crc2.closePath();
            crc2.fillStyle = "rgb(122, 63, 0)";
            crc2.fill();

            crc2.translate(10, 80);
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(51, 27, 1)";
            crc2.fill();

            crc2.translate(40, 70);
            crc2.beginPath();
            crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(51, 27, 1)";
            crc2.fill();

            crc2.translate(50, 0);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
            crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
            crc2.closePath();
            crc2.fillStyle = "rgb(122, 63, 0)";
            crc2.fill();

            crc2.restore();
        }
    }
}