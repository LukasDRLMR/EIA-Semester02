window.addEventListener("load", function (): void {

    const info: HTMLElement = <HTMLElement>document.querySelector("#infoBox");
    handleload();
    clickListener();

    function handleload(): void {
        window.addEventListener("mousemove", e => {
            let mousex: number = e.clientX;
            let mousey: number = e.clientY;
            console.log([mousex, mousey]);
            info.style.top = (mousey + 7).toString() + "px";
            info.style.left = (mousex + 7).toString() + "px";
            info.innerHTML = "Y-Coordinate " + mousey.toString() + " " + "X-Coordinate " + mousex.toString() + " " + e.target;
        });
    }

    function clickListener(): void {
        window.addEventListener("click", displayInfos);
        window.addEventListener("keyup", displayInfos);

        function displayInfos(e: Event): void {
            console.groupCollapsed("Event-Informations");
            console.log(e.type);
            console.log(e.target);
            console.log(e.currentTarget);
            console.log(e);
            console.groupEnd();
        }
    }
});