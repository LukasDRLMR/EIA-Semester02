"use strict";
window.addEventListener("load", function () {
    const info = document.querySelector("#infoBox");
    handleload();
    clickListener();
    function handleload() {
        window.addEventListener("mousemove", e => {
            let mousex = e.clientX;
            let mousey = e.clientY;
            console.log([mousex, mousey]);
            info.style.top = (mousey + 7).toString() + "px";
            info.style.left = (mousex + 7).toString() + "px";
            info.innerHTML = "Y-Coordinate " + mousey.toString() + " " + "X-Coordinate " + mousex.toString() + " " + e.target;
        });
    }
    function clickListener() {
        window.addEventListener("click", displayInfos);
        window.addEventListener("keyup", displayInfos);
        function displayInfos(e) {
            console.groupCollapsed("Event-Informations");
            console.log(e.type);
            console.log(e.target);
            console.log(e.currentTarget);
            console.log(e);
            console.groupEnd();
        }
    }
});
//# sourceMappingURL=script.js.map