namespace Endabgabe {
    export class Customer extends Human {
        public mood: CUSTOMERMOOD;
        private moodState: string[] = ["rgb(0, 112, 0)", "rgb(219, 135, 0)", "rgb(176, 3, 0)"];
        private ordering: boolean;
        private orderStation: Vector;
        private readytoOrder: boolean;
        private orders: string[][] = [
            ["Döner", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
            ["Yufka", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"],
            ["Lahmacun", "Fleisch", "Salat", "Kraut", "Zwiebeln", "Tomaten", "Soße", "Scharf"]
        ];

        constructor() {
            super();

            this.position = new Vector(crc2.canvas.width - 10, crc2.canvas.height * 0.5);
            this.velocity = new Vector(0, 0);
            this.mood = CUSTOMERMOOD.HAPPY;
            this.ordering = true;
            for (let n: number = 0; n < customers.length; n++) {
                if (this.ordering == customers[n].ordering) {
                    this.ordering = false;
                }
            }
            this.orderStation = new Vector(1300, 930);
            this.onMyWay = false;
            this.readytoOrder = false;
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            crc2.closePath();
            if (this.mood == CUSTOMERMOOD.HAPPY) {
                crc2.fillStyle = this.moodState[0];
            }
            if (this.mood == CUSTOMERMOOD.UNHAPPY) {
                crc2.fillStyle = this.moodState[1];
            }
            if (this.mood == CUSTOMERMOOD.HANGRY) {
                crc2.fillStyle = this.moodState[2];
            }
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.restore();
        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
            let random: number;
            setInterval(function(): void {
                random = Math.random();
                console.log(random);
            },          1000);
            if (random! < 0.05 && this.ordering != true) {
                this.velocity = new Vector(Vector.random(-200, 200), Vector.random(-200, 200));
            }
            if (this.position.x <= crc2.canvas.width * 0.65) {
                this.velocity = new Vector(Vector.random(0, 200), this.velocity.y);
            }
            if (this.position.x > crc2.canvas.width - 10) {
                this.velocity = new Vector(Vector.random(-200, 0), this.velocity.y);
            }
            if (this.position.y < 0) {
                this.velocity = new Vector(this.velocity.x, Vector.random(0, 200));
            }
            if (this.position.y > crc2.canvas.height * 0.7 && this.ordering == false) {
                this.velocity = new Vector(this.velocity.x, Vector.random(-200, 0));
            }

            if (this.ordering == true && this.onMyWay == false) {
                this.velocity = Vector.getDifference(this.orderStation, this.position);
                this.onMyWay = true;
            }
            if (this.ordering == true && Math.floor(this.position.x) == this.orderStation.x) {
                this.velocity = new Vector(0, 0);
                this.onMyWay = false;
                this.readytoOrder = true;
            }
            if (this.ordering == true && this.readytoOrder == true) {
                this.order();
            }
        }

        public order(): void {
            let randomOrder: number = Math.floor(Math.random() * (2 - 0 + 1));
            
        }
    }
}