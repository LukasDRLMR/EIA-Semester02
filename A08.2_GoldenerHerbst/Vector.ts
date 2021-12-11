namespace A08_2_GoldenerHerbst {
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

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        randomXY(_min: number, _max: number): void {
            let lenght: number = Math.random() * (_max - _min) + _min;
            let direction: number = Math.random();

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(lenght);
        }

        randomY(_min: number, _max: number): void {
            let height: number = Math.random() * (_max - _min) + _min;
            this.set(0, height);
        }

        randomX(_min: number, _max: number): void {
            let lenght: number = Math.random() * (_max - _min) + _min;

            this.set(Math.cos(0), Math.sin(0));
            this.scale(lenght);
        }
    }
}