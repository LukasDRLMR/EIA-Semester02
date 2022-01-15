namespace A11_1_GoldenerHerbstAdvanced {
    export class Leaf extends Moveable {
        private type: number;
        private size: number;
        private color: string;
        private rotation: number;
        private rotationChange: number;
        
        constructor() {
            super();

            this.position = Vector.randomY(0, crc2.canvas.height);

            this.velocity = Vector.randomXY(100, 200);

            this.type = Math.floor(Math.random() * 3);
            this.size = Math.random() + 0.5;

            let color: string[] = ["rgb(163, 104, 0)", "rgba(140, 59, 0)", "rgb(205, 212, 0)"];
            let randomColor: number = Math.floor(Math.random() * (3 - 0));

            this.color = color[randomColor];
            this.rotation = Math.random() * 360;
            this.rotationChange = Math.random() * (10 - -10) + -10;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.moveTo(0, 0);
            crc2.rotate(this.rotation);
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fill(leavesPaths[this.type]);
            crc2.closePath();
            crc2.restore();
        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            this.rotation += this.rotationChange * _timeslice;

            if (this.position.x > (crc2.canvas.width + 50)) {
                moveables.splice(moveables.indexOf(this), 1);
                drawLeaves();
            }
            if (this.position.y > (crc2.canvas.height + 50)) {
                moveables.splice(moveables.indexOf(this), 1);
                drawLeaves();
            }            
        }
    }
}