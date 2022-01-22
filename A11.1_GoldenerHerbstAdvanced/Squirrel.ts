namespace A11_1_GoldenerHerbstAdvanced {
    export class Squirrel extends Moveable {
        public bellysize: number;
        private task: TASK;

        constructor() {
            super();

            this.position = new Vector(Vector.random(crc2.canvas.width, 0), Vector.random(crc2.canvas.height, gras));
            this.task = TASK.WAIT;
            this.bellysize = 1;
        }

        public move(_timeslice: number, _position?: Vector): void {
            if (this.bellysize <= 5) {
                super.move(_timeslice);
                if (Math.random() < 0.05 && !_position && this.task == TASK.WAIT && this.bellysize < 5) {
                    this.velocity = new Vector(Vector.random(-200, 200) / this.bellysize, Vector.random(-200, 200) / this.bellysize);
                }
                if (this.position.y <= gras) {
                    this.velocity = new Vector(this.velocity.x, Vector.random(0, 200));
                }
                if (this.position.y > crc2.canvas.height - 10) {
                    this.velocity = new Vector(this.velocity.x, Vector.random(-200, 0));
                }
                if (nuts.length > 0) {
                    this.takeAttention();
                }
            }
        }

        public takeAttention(): void {
            for (let i: number = 0; i < nuts.length; i++) {
                let distance: number = new Vector(nuts[i].position.x - this.position.x, nuts[i].position.y - this.position.y).length;
                if (this.task == TASK.WAIT) {
                    if (nuts[i].readyToBeEaten == true) {
                        if (nuts[i].targeted == false) {
                            nuts[i].targeted = true;
                            this.task = TASK.EAT;
                            this.velocity = new Vector(nuts[i].position.x - this.position.x, nuts[i].position.y - this.position.y);
                        }
                    }
                }
                if (this.task == TASK.EAT) {
                    if (distance < 10) {
                        this.velocity = new Vector(0, 0);
                        nuts[i].eaten = true;
                        this.task = TASK.WAIT;
                        this.bellysize += 1;
                    }
                }
            }
        }

        public draw(): void {
            if (this.bellysize > 5) {
                crc2.save();
                crc2.translate(this.position.x - 30, this.position.y - 50);
                crc2.scale(0.2, 0.2);
                crc2.beginPath();
                crc2.lineTo(102, 54);
                crc2.lineTo(179, 6);
                crc2.lineTo(190, 85);
                crc2.lineTo(298, 20);
                crc2.lineTo(290, 107);
                crc2.lineTo(395, 106);
                crc2.lineTo(307, 176);
                crc2.lineTo(349, 279);
                crc2.lineTo(252, 201);
                crc2.lineTo(167, 285);
                crc2.lineTo(159, 199);
                crc2.lineTo(34, 261);
                crc2.lineTo(67, 171);
                crc2.lineTo(0, 124);
                crc2.lineTo(47, 94);
                crc2.lineTo(1, 1);
                crc2.closePath();
                crc2.translate(30, 80);
                crc2.fillStyle = "rgb(255, 255, 255)";
                crc2.fill();
                crc2.strokeStyle = "rgb(0, 0, 0)";
                crc2.lineWidth = 7;
                crc2.stroke();
                crc2.font = "90px Comic Sans";
                crc2.fillStyle = "rgb(50, 0, 0)";
                crc2.fillText("Plop", 80, 80);
                crc2.restore();
                setTimeout(this.plop.bind(this), 2000);
            } else {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.scale(0.3, 0.3);

                if (this.velocity.x > 0)
                    crc2.scale(-1, 1);

                crc2.beginPath();
                crc2.ellipse(0, 0, (this.bellysize / 10 + 1) * 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "rgb(" + (this.bellysize / 10 + 1) * 122 + ", 63, 0)";
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

        public plop(): void {
            this.bellysize = 1;
            // moveables.splice(moveables.indexOf(this), 1);
            // drawSquirrel(1);
        }
    }
}