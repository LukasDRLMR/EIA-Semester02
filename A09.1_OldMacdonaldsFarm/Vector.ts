namespace A09_1_OldMacdonaldsFarm {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        random(): void {
            let xPosition: number = Math.random() * ((crc2.canvas.width - 100) - 100 + 100);
            let yPosition: number = Math.random() * ((crc2.canvas.height - 100) - crc2.canvas.height - golden + 100);

            this.set(xPosition, yPosition);
        }
    }
}