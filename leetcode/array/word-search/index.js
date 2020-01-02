// https://leetcode.com/problems/word-search/

function next(row, col, i, board, word, used = []) {
    const colN = board[0].length;
    if (i === word.length) return true;
    if (row < 0 || row >= board.length || col < 0 || col >= colN) return false;
    if (used[col + row * colN] && used[col + row * colN]) return false;
    if (board[row][col] !== word[i]) return false;

    used[col + row * colN] = true;

    return next(row + 1, col, i + 1, board, word, [...used])
        || next(row - 1, col, i + 1, board, word, [...used])
        || next(row, col + 1, i + 1, board, word, [...used])
        || next(row, col - 1, i + 1, board, word, [...used]);
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if (next(row, col, 0, board, word)) return true;
        }
    }
    return false;
};

// explanation of matrix math
// row = index / colL
// col = index % colL
// index = row * colL
// see more about martix math:
// https://leetcode.com/problems/search-a-2d-matrix/discuss/465588/javascript-code-for-solution
// https://leetcode.com/problems/search-a-2d-matrix/solution/
