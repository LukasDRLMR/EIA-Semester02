namespace A09_1_OldMacdonaldsFarm {
    export let animalKind: Path2D;

    export let shapesAnimal: Function[] = [drawCow, drawPig];

    export function drawCow(): void {
        crc2.save();
        crc2.translate(750, 700);
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.ellipse(0, 0, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.arc(-70, -50, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.arc(-100, -40, 20, 0, Math.PI * 2);
        crc2.fill();
        crc2.fillRect(30, 30, 20, 50);
        crc2.fillRect(-50, 30, 20, 50);
        crc2.arc(0, 0, 20, 0, Math.PI * 2);
        crc2.fill();
        crc2.restore();
    }

    function drawPig(): void {
        crc2.save();
        crc2.translate(750, 500);
        crc2.beginPath();
        crc2.fillStyle = "pink";
        crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.arc(-50, -25, 35, 0, Math.PI * 2);
        crc2.fill();
        crc2.arc(-80, -20, 20, 0, Math.PI * 2);
        crc2.fill();
        crc2.fillRect(30, 20, 20, 30);
        crc2.fillRect(-50, 20, 20, 30);
        crc2.restore();
    }
}