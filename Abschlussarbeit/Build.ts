namespace Endabgabe {
    export class Build extends Food {

        constructor() {
            super();

            this.positionPrep = new Vector(crc2.canvas.width * 0.38, crc2.canvas.height * 0.5);
        }

        public clicked(): void {
            order = [];
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.positionPrep.x, this.positionPrep.y, 150, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "rgb(255, 255, 255)";
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.fillStyle = "black";

            crc2.translate(crc2.canvas.width * 0.38, crc2.canvas.height * 0.44);

            if (order.includes("Döner")) {
                crc2.save();
                crc2.beginPath();
                crc2.fillStyle = "rgb(180, 100, 0)";
                crc2.arc(20, 0, 90, 0, 1.2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.beginPath();
                crc2.rotate(3.2);
                crc2.arc(20, -120, 90, 0, 1.2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.restore();
            }

            if (order.includes("Yufka")) {
                crc2.save();
                crc2.beginPath();
                crc2.translate(-20, 60);
                crc2.fillStyle = "rgb(200, 150, 20)";
                crc2.arc(20, 0, 130, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.restore();
            }

            if (order.includes("Lahmacun")) {
                crc2.save();
                crc2.beginPath();
                crc2.translate(-20, 60);
                crc2.fillStyle = "rgb(180, 100, 100)";
                crc2.arc(20, 0, 130, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.restore();
            }

            if (order.includes("Meat")) {
                crc2.save();
                crc2.beginPath();
                crc2.translate(-50, 50);
                crc2.fillStyle = "rgb(140, 60, 0)";
                crc2.fillRect(0, -20, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, -40, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, 50, 130, 30);
                crc2.closePath();
                crc2.restore();
            }


            if (order.includes("Salad")) {
                crc2.beginPath();
                crc2.rotate(2);
                crc2.fillStyle = "rgb(0, 200, 0)";
                crc2.fillRect(0, -20, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, -40, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, 50, 130, 30);
            }

            if (order.includes("Cabbage")) {
                crc2.translate(-20, 110);
                crc2.beginPath();
                crc2.rotate(5);
                crc2.fillStyle = "rgb(220, 220, 220)";
                crc2.fillRect(0, -20, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, -40, 130, 30);
                crc2.rotate(2);
                crc2.fillRect(-80, 50, 130, 30);
            }

            if (order.includes("Onion")) {
                crc2.translate(-20, 110);
                crc2.beginPath();
                crc2.rotate(5);
                crc2.fillStyle = "rgb(220, 120, 0)";
                crc2.fillRect(0, -20, 100, 10);
                crc2.rotate(2);
                crc2.fillRect(-80, -40, 100, 10);
                crc2.rotate(2);
                crc2.fillRect(-80, 50, 100, 10);
            }

            if (order.includes("Tomato")) {
                crc2.beginPath();
                crc2.fillStyle = "rgb(200, 0, 0)";
                crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.translate(-70, 90);
                crc2.beginPath();
                crc2.fillStyle = "rgb(200, 0, 0)";
                crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
                crc2.translate(70, 0);
                crc2.beginPath();
                crc2.fillStyle = "rgb(200, 0, 0)";
                crc2.arc(0, 0, 20, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fill();
            }

            if (order.includes("Sauce")) {
                crc2.beginPath();
                crc2.translate(-100, -110);
                crc2.fillStyle = "rgba(235, 213, 171, 0.5)";
                crc2.fillRect(0, 0, 150, 150);
                crc2.closePath();
            }

            if (order.includes("Hot")) {
                crc2.translate(20, 20);
                for (let i: number = 0; i < 5; i++) {
                    for (let j: number = 0; j < 7; j++) {
                        crc2.save();
                        crc2.fillStyle = "rgb(200, 0, 0)";
                        crc2.beginPath();
                        crc2.arc(20 * j, 20 * i, 5, 0, Math.PI * 2);
                        crc2.fill();
                        crc2.closePath();
                        crc2.restore();
                    }
                }
            }

            crc2.restore();
        }
    }
}