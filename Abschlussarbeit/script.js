"use strict";
// Endabgabe
// Name: Lukas Dirlmeier
// Matrikelnummer: 268173
// Datum: 15.02.2022
var Endabgabe;
(function (Endabgabe) {
    let GAMESTATE;
    (function (GAMESTATE) {
        GAMESTATE[GAMESTATE["INIT"] = 0] = "INIT";
        GAMESTATE[GAMESTATE["PLAY"] = 1] = "PLAY";
    })(GAMESTATE = Endabgabe.GAMESTATE || (Endabgabe.GAMESTATE = {}));
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    Endabgabe.crc2 = canvas.getContext("2d");
    let imgData;
    let staffCount = 3;
    Endabgabe.staffs = [];
    Endabgabe.customers = [];
    Endabgabe.ingredients = [];
    Endabgabe.order = [];
    function handleLoad() {
        drawBG();
        InitEverything();
        Action();
        window.setInterval(update, 30);
    }
    function drawBG() {
        Endabgabe.crc2.fillStyle = "rgb(201, 142, 99)";
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height); //"Fußboden"
        Endabgabe.crc2.fillStyle = "black";
        Endabgabe.crc2.fillRect(Endabgabe.crc2.canvas.width * 0.2, Endabgabe.crc2.canvas.height - 10, 150, 10); //"Mitarbeiter-Tür"
        Endabgabe.crc2.fillRect(Endabgabe.crc2.canvas.width - 10, Endabgabe.crc2.canvas.height * 0.45, 10, 150); //"Eingangs-Tür"
        Endabgabe.crc2.fillStyle = "rgb(70, 70, 70)";
        Endabgabe.crc2.fillRect(0, 0, (Endabgabe.crc2.canvas.width * 0.15), Endabgabe.crc2.canvas.height);
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.crc2.canvas.width * 0.6, Endabgabe.crc2.canvas.height * 0.15);
        Endabgabe.crc2.fillRect(Endabgabe.crc2.canvas.width * 0.6, 0, Endabgabe.crc2.canvas.width * 0.1, Endabgabe.crc2.canvas.height); //"Theke"
        //linker Thekenbereich
        Endabgabe.crc2.fillStyle = "rgb(230, 230, 230)";
        for (let i = 0; i <= 3; i++) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(Endabgabe.crc2.canvas.width * 0.10, Endabgabe.crc2.canvas.height * 0.15);
            Endabgabe.crc2.fillRect(0, 150 * i, 80, 120); //"Schneidebretter"
            Endabgabe.crc2.restore();
        }
        //rechter Thekenbereich
        Endabgabe.crc2.fillStyle = "rgb(240, 240, 250)";
        for (let i = 0; i <= 4; i++) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(Endabgabe.crc2.canvas.width * 0.6, Endabgabe.crc2.canvas.height * 0.15); //"Behälter rechts"
            Endabgabe.crc2.fillRect(10, 130 * i, 120, 100);
            Endabgabe.crc2.restore();
        }
        //oberer Thekenbereich
        for (let i = 0; i < 3; i++) {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(Endabgabe.crc2.canvas.width * 0.25, Endabgabe.crc2.canvas.height * 0.02); //"Behälter oben"
            Endabgabe.crc2.fillRect(160 * i, 0, 100, 120);
            Endabgabe.crc2.restore();
        }
        imgData = Endabgabe.crc2.getImageData(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
    }
    function InitEverything() {
        let döner = new Endabgabe.Döner;
        let yufka = new Endabgabe.Yufka;
        let lahmacun = new Endabgabe.Lahmacun;
        let salad = new Endabgabe.Salad;
        let cabbage = new Endabgabe.Cabbage;
        let onion = new Endabgabe.Onion;
        let tomato = new Endabgabe.Tomato;
        let sauce = new Endabgabe.Sauce;
        let hot = new Endabgabe.Hot;
        let meat = new Endabgabe.Meat;
        let build = new Endabgabe.Build;
        Endabgabe.ingredients.push(döner, yufka, lahmacun, salad, cabbage, onion, tomato, sauce, hot, meat, build);
        for (let i = 1; i <= staffCount; i++) {
            let staff = new Endabgabe.Staff;
            Endabgabe.staffs.push(staff);
        }
        for (let i = 1; i <= staffCount; i++) {
            let customer = new Endabgabe.Customer;
            Endabgabe.customers.push(customer);
        }
    }
    function Action() {
        for (let item of Endabgabe.ingredients) {
            canvas.addEventListener("click", function (_event) {
                if (Endabgabe.crc2.isPointInPath(item.path, _event.offsetX, _event.offsetY)) {
                    item.clicked(1);
                }
                if (Endabgabe.crc2.isPointInPath(item.pathGround, _event.offsetX, _event.offsetY)) {
                    item.clicked(2);
                }
            });
        }
        for (let staff of Endabgabe.staffs) {
            canvas.addEventListener("click", function (_event) {
                if (Endabgabe.crc2.isPointInPath(staff.path, _event.offsetX, _event.offsetY)) {
                    staff.clicked();
                }
            });
        }
    }
    function update() {
        Endabgabe.crc2.putImageData(imgData, 0, 0);
        for (let food of Endabgabe.ingredients) {
            food.draw();
        }
        for (let staff of Endabgabe.staffs) {
            staff.move(1 / 50);
            staff.work();
            staff.draw();
        }
        for (let customer of Endabgabe.customers) {
            customer.move(1 / 50);
            customer.draw();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map