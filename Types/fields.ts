export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coordinates = [number, number];
//state
export const CellState: Record<string, Cell> = {
    empty: 0,
    bomb: 9,
    hidden: 10,
    mark: 11,
    weakMark: 12,
}
export const emptyFieldGenerator = (size: number, state: Cell = CellState.empty): Field =>  new Array(size).fill(null).map(() => new Array(size).fill(state));


export const fieldGenerator = (size:number, density:number): Field => {
    if(density > 1 || density < 0 ) {
         throw new Error('Density must be between 0 and 1');
    }
    let unprocessedCells = size * size;
    let cellsWithBomb = unprocessedCells * density;
    const result: Field = emptyFieldGenerator(size);
    for(let i = 0; i < size; i += 1) {
        for(let j = 0; j < size; j++) {
            //no bombs
            if(cellsWithBomb === 0) {
                return result;
            }
            //with bombs
            if(cellsWithBomb > 0) {
                result[i][j] = CellState.bomb;
                cellsWithBomb =- 1;
            }
            unprocessedCells =-1;
        }
    }
    return result;
}
