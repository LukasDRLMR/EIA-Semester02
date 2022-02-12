namespace Endabgabe {
    export abstract class Food {
        public path: Path2D = new Path2D();
        public doener: boolean;
        public yufka: boolean;
        public lahmacun: boolean;
        public salad: boolean;
        public cabbage: boolean;
        public tomato: boolean;
        public onion: boolean;
        public sauce: boolean;
        public hot: boolean;
        protected position: Vector;
        protected positionDisplay: Vector;
        protected capacity: number;

        constructor() {
            this.salad = false;
            this.cabbage = false;
            this.tomato = false;
            this.onion = false;
            this.sauce = false;
            this.hot = false;
            this.doener = false;
            this.yufka = false;
            this.lahmacun = false;
        }

        public abstract draw(): void;

        public clicked(): void {
            if (this.capacity == 5) {
                this.capacity = 0;
            } else {
                this.capacity += 1;
            }
        }
    }
}