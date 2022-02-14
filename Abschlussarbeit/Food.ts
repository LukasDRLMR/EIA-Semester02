namespace Endabgabe {
    export abstract class Food {
        public path: Path2D = new Path2D();
        public pathGround: Path2D = new Path2D();
        protected positionPrep: Vector;
        protected positionMat: Vector;
        protected positionDisplay: Vector;
        protected capacity: number;
        protected maxCapacity: number;

        constructor() {
//
        }

        public abstract draw(): void;

        public clicked(_object: number): void {
            if (_object == 1 && this.capacity > 0) {
                this.capacity -= 1;
            }
            if (_object == 2) {
                this.capacity = this.maxCapacity;
            }
        }
    }
}