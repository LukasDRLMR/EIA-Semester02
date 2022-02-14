namespace Endabgabe {
    export abstract class Human {
        public path: Path2D = new Path2D();
        protected position: Vector;
        protected velocity: Vector;
        protected onMyWay: boolean;

        constructor() {
        }

        public abstract draw(): void;

        public move(_timeslice: number): void {
            this.path = new Path2D();
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
    }
}