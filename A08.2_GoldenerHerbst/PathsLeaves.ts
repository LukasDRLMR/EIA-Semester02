namespace A08_2_GoldenerHerbst {
    export let leavesPaths: Path2D[];

    export let shapesLeaves: number[][][] = [
        [
            [-20, 0, -30, 20, -20, 50], [20, 20, 10, 10, 0, 0]
        ],
        [
            [-30, 10, -40, 40, -10, 30], [-10, 60, 0, 60, 10, 30], [50, 70, 30, 0, 0, 0]
        ],
        [
            [0, 0, -40, 20, -40, 20], [-20, 20, -20, 20, -40, 50], [-40, 50, 0, 20, 0, 80], [0, 20, 60, 60, 40, 50], [20, 20, 20, 20, 40, 20]
        ]
    ];

    export function createPaths(): void {
        leavesPaths = chooseLeavesPaths(shapesLeaves);
    }

    function chooseLeavesPaths(_curves: number[][][]): Path2D[] {
        console.log(shapesLeaves);
        let paths: Path2D[] = [];
        for (let type of _curves) {
            let path: Path2D = new Path2D();
            for (let coordinates of type) {
                path.bezierCurveTo(coordinates[0], coordinates[1], coordinates[2], coordinates[3], coordinates[4], coordinates[5]);
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
}