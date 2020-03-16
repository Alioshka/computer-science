function solution(N, S, T){
    let sunkenShips = 0;
    let hitButNotSunk = 0;

    let hitsMap = {};
    T.toLowerCase().split(' ').forEach(hit => {
        hitsMap[hit] = true;
    });

    const ships = buildShips(S);

    ships.forEach(ship =>{
        let countTotal = 0;
        let countHits = 0;
        let [start, end] = ship;
        for(let row = Number(start[0]); row <= Number(end[0]); row++) {
            for(let col = start[1].charCodeAt(0) - 96; col <= end[1].charCodeAt(0) - 96; col++){
                countTotal += 1;
                if(hitsMap[row + String.fromCharCode(96 + col)]){
                    countHits += 1;
                }
            }
        }
        if(countTotal === countHits){
            sunkenShips += 1;
        } else if(countHits > 0){
            hitButNotSunk +=1;
        }
    });

    return `${sunkenShips},${hitButNotSunk}`;
}

function buildShip(ship){
    let array = [];
    // coordinate can be like 1B or 14C
    ship.forEach(coordinate => { // start and end coordinate
        array.push([coordinate.slice(0, coordinate.length - 1), coordinate[coordinate.length - 1]]); // '14C' will be like [14, C]
    });
    return array;
}

function buildShips(S){
    let shipStrings = S.toLowerCase().split(',');
    let results = [];
    shipStrings.forEach(string => {
        results.push(buildShip(string.split(' ')));
    });
    return results;
}

// 'a'.charCodeAt(0) === 97; 'a'.charCodeAt(0) - 97 === 0
// String.fromCharCode(97 + n)

let result1 = solution(4, '1B 2C,2D 4D', '2B 2D 3D 4D 4A'); // '1,1'
let result2 = solution(3, '1A 1B,2C 2C', '1B'); // '0,1'
let result3 = solution(12, '1A 2A,12A 12A', '12A'); // '1,0'
console.log(result1, result2, result3);
