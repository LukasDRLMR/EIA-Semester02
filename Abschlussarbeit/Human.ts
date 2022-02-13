namespace Endabgabe {
    export abstract class Human {
        public path: Path2D = new Path2D();
        public state: WORKSTATE;
        protected position: Vector;
        protected velocity: Vector;

        constructor() {

        }

        public abstract draw(): void;

        public move(_timeslice: number): void {
            this.path = new Path2D();
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        public clicked(): void {
            //
        }

        public work(_Pos?: Vector): void {
            //
        }
    }
}