function starOutGrid(grid) {
    let visited = new Set();
    function valuesToStars(r,c,g,v){
        for(let i = 0;i<g.length;i++){
            g[i][c] = '*';
            v.add(`${i}${c}`);
        }
        for(let i = 0;i<g[r].length;i++){
            g[r][i] = '*';
            v.add(`${r}${i}`);
        }
        return g
    }
    for (let row = 0;row<grid.length;row++){
        for (let cell = 0;cell<grid[row].length;cell++){
            if (!(visited.has(`${row}${cell}`))){
                visited.add(`${row}${cell}`);
                if (grid[row][cell] == '*'){
                    grid = valuesToStars(row,cell,grid,visited);
                }
            }
        }
    }
    return grid;
}

console.log(starOutGrid([
    ["A", "B", "C"],
    ["D", "E", "*"],
    ["G", "H", "I"],
  ]))
