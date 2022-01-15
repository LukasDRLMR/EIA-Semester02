namespace LE11_1_Modifikatoren {
    export abstract class Superclass {
        static position: number;

        constructor() {
            Superclass.position = 1;
        }

        static doStatic(): void {
            console.log(this.position);
        }

        abstract doSomething(): void;

    }
    

}