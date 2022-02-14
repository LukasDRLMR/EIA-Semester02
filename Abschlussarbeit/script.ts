// Endabgabe
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 15.02.2022

namespace Endabgabe {

    export enum GAMESTATE {
        INIT,
        PLAY
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    let imgData: ImageData;
    let staffCount: number = 3;

    export let staffs: Staff[] = [];
    export let customers: Customer[] = [];
    export let ingredients: Food[] = [];
    export let order: string[] = [];

    function handleLoad(): void {
        drawBG();
        InitEverything();
        Action();

        window.setInterval(update, 30);
    }

    function drawBG(): void {
        crc2.fillStyle = "rgb(201, 142, 99)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);     //"Fußboden"

        crc2.fillStyle = "black";
        crc2.fillRect(crc2.canvas.width * 0.2, crc2.canvas.height - 10, 150, 10);       //"Mitarbeiter-Tür"
        crc2.fillRect(crc2.canvas.width - 10, crc2.canvas.height * 0.45, 10, 150);      //"Eingangs-Tür"

        crc2.fillStyle = "rgb(70, 70, 70)";
        crc2.fillRect(0, 0, (crc2.canvas.width * 0.15), crc2.canvas.height);
        crc2.fillRect(0, 0, crc2.canvas.width * 0.6, crc2.canvas.height * 0.15);
        crc2.fillRect(crc2.canvas.width * 0.6, 0, crc2.canvas.width * 0.1, crc2.canvas.height);     //"Theke"

        //linker Thekenbereich
        crc2.fillStyle = "rgb(230, 230, 230)";
        for (let i: number = 0; i <= 3; i++) {
            crc2.save();
            crc2.translate(crc2.canvas.width * 0.10, crc2.canvas.height * 0.15);
            crc2.fillRect(0, 150 * i, 80, 120);       //"Schneidebretter"
            crc2.restore();
        }

        //rechter Thekenbereich
        crc2.fillStyle = "rgb(240, 240, 250)";
        for (let i: number = 0; i <= 4; i++) {
            crc2.save();
            crc2.translate(crc2.canvas.width * 0.6, crc2.canvas.height * 0.15);             //"Behälter rechts"
            crc2.fillRect(10, 130 * i, 120, 100);
            crc2.restore();
        }

        //oberer Thekenbereich
        for (let i: number = 0; i < 3; i++) {
            crc2.save();
            crc2.translate(crc2.canvas.width * 0.25, crc2.canvas.height * 0.02);        //"Behälter oben"
            crc2.fillRect(160 * i, 0, 100, 120);
            crc2.restore();
        }

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function InitEverything(): void {
        let döner: Döner = new Döner;
        let yufka: Yufka = new Yufka;
        let lahmacun: Lahmacun = new Lahmacun;
        let salad: Salad = new Salad;
        let cabbage: Cabbage = new Cabbage;
        let onion: Onion = new Onion;
        let tomato: Tomato = new Tomato;
        let sauce: Sauce = new Sauce;
        let hot: Hot = new Hot;
        let meat: Meat = new Meat;
        let build: Build = new Build;
        ingredients.push(döner, yufka, lahmacun, salad, cabbage, onion, tomato, sauce, hot, meat, build);

        for (let i: number = 1; i <= staffCount; i++) {
        let staff: Staff = new Staff;
        staffs.push(staff);
        }

        for (let i: number = 1; i <= staffCount; i++) {
        let customer: Customer = new Customer;
        customers.push(customer);
    }

    }

    function Action(): void {
        for (let item of ingredients) {
            canvas.addEventListener("click", function (_event: MouseEvent): void {
                if (crc2.isPointInPath(item.path, _event.offsetX, _event.offsetY)) {
                    item.clicked(1);
                }
                if (crc2.isPointInPath(item.pathGround, _event.offsetX, _event.offsetY)) {
                    item.clicked(2);
                }
            });
        }
        for (let staff of staffs) {
            canvas.addEventListener("click", function (_event: MouseEvent): void {
                if (crc2.isPointInPath(staff.path, _event.offsetX, _event.offsetY)) {
                    staff.clicked();
                }
            });
        }
    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let food of ingredients) {
            food.draw();
        }

        for (let staff of staffs) {
            staff.move(1 / 50);
            staff.work();
            staff.draw();
        }

        for (let customer of customers) {
            customer.move(1 / 50);
            customer.draw();
        }
    }
}