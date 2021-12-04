namespace A09_1_OldMacdonaldsFarm {
    export class Animal {
        position: Vector;
        type: number;
        name: number;
        food: number;
        sound: number;


        constructor() {
            this.position = new Vector(0, 0);
            // this.position.random;
            this.type = Math.floor(Math.random() * 2);
        }

        draw(): void {
            crc2.save();
            crc2.translate(750, 700);
            shapesAnimal[0]();
            crc2.restore();
        }
    }
}