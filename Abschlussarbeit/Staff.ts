namespace Endabgabe {

    export enum WORKSTATE {
        CASH,
        TOPPING,
        PREPARATION,
        PAUSE
    }

    export enum STAFFSTATE {
        WORKING,
        SLEEPING,
        STRESSED
    }

    export class Staff extends Human {
        public state: WORKSTATE;
        private mood: STAFFSTATE;
        private targeted: boolean;
        private pauseStation: Vector;
        private cashStation: Vector;
        private prepStation: Vector;
        private toppingStation: Vector;

        constructor() {
            super();

            this.position = new Vector(crc2.canvas.width * 0.25, crc2.canvas.height - Math.floor(Math.random() * 100));
            this.velocity = new Vector(0, 0);
            this.targeted = false;
            this.state = 0;
            for (let n: number = 0; n < staffs.length; n++) {
                if (this.state == staffs[n].state) {
                    this.state++;
                }
            }
            this.mood = STAFFSTATE.WORKING;
            this.onMyWay = false;
            this.pauseStation = new Vector(900, 930);
            this.cashStation = new Vector(980, 900);
            this.prepStation = new Vector(350, 400);
            this.toppingStation = new Vector(900, 300);
        }

        public draw(): void {
            crc2.save();
            crc2.beginPath();
            this.path.arc(this.position.x, this.position.y, 50, 0, 2 * Math.PI);
            crc2.closePath();
            if (this.mood == STAFFSTATE.WORKING) {
                crc2.fillStyle = "rgb(0, 0, 255";
            }
            if (this.mood == STAFFSTATE.SLEEPING) {
                crc2.fillStyle = "rgb(120, 0, 90)";
            }
            if (this.mood == STAFFSTATE.STRESSED) {
                crc2.fillStyle = "rgb(120, 0, 25)";
            }
            if (this.targeted == true) {
                crc2.fillStyle = "rgb(0, 130, 173)";
            }
            crc2.fill(this.path);
            crc2.stroke(this.path);
            crc2.restore();
        }

        public clicked(): void {
            for (let i: number = 0; i < staffs.length; i++) {
                if (staffs[i].targeted == true) {
                    let one: WORKSTATE = this.state;
                    let two: WORKSTATE = staffs[i].state;
                    this.state = two;
                    staffs[i].state = one;
                }
            }
            this.targeted = true;
            setTimeout((): void => {
                this.targeted = false;
            }, 5000);
        }

        public work(): void {
            if (this.state == WORKSTATE.PAUSE && this.onMyWay == false) {
                this.velocity = Vector.getDifference(this.pauseStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.CASH && this.onMyWay == false) {
                this.velocity = Vector.getDifference(this.cashStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.PREPARATION && this.onMyWay == false) {
                this.velocity = Vector.getDifference(this.prepStation, this.position);
                this.onMyWay = true;
            }
            else if (this.state == WORKSTATE.TOPPING && this.onMyWay == false) {
                this.velocity = Vector.getDifference(this.toppingStation, this.position);
                this.onMyWay = true;
            }
            if (Math.floor(this.position.x) == this.pauseStation.x && this.state == WORKSTATE.PAUSE) {
                this.velocity = new Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.cashStation.x && this.state == WORKSTATE.CASH) {
                this.velocity = new Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.prepStation.x && this.state == WORKSTATE.PREPARATION) {
                this.velocity = new Vector(0, 0);
                this.onMyWay = false;
            }
            if (Math.floor(this.position.x) == this.toppingStation.x && this.state == WORKSTATE.TOPPING) {
                this.velocity = new Vector(0, 0);
                this.onMyWay = false;
            }
        }
    }
}