class TicTacToe {
    constructor() {
        this.gameArray = [];
        for (var i = 0; i < 3; i++) {
            this.gameArray[i] = [null, null, null];
        }
        this.current = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameArray[rowIndex][columnIndex] === null) {
            this.gameArray[rowIndex][columnIndex] = this.current;
            if (this.current === 'x') {
                this.current = 'o';
            } else {
                this.current = 'x';
            }
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner() !== null) {
            return true;
        }
        return false;
    }

    getWinner() {
        var col0 = [], col1 = [], col2 = [], diag1 = [], diag2 = [], count = 0;
        function isX(char) {return char === 'x'};
        function isO(char) {return char === 'o'};
        for (var i = 0; i < 3; i++) {
            if ( this.gameArray[i].every(isX) ) {
                return 'x';
            }
            if ( this.gameArray[i].every(isO) ) {
                return 'o';
            }
            col0.push(this.gameArray[i][0]);
            col1.push(this.gameArray[i][1]);
            col2.push(this.gameArray[i][2]);
            diag1.push(this.gameArray[i][0 + count]);
            diag2.push(this.gameArray[i][2 - count]);
            count++;
        }
        if (col0.every(isX) || col1.every(isX) || col2.every(isX)
         || diag1.every(isX) || diag2.every(isX)) {
            return 'x';
        }
        if (col0.every(isO) || col1.every(isO) || col2.every(isO)
         || diag1.every(isO) || diag2.every(isO)) {
            return 'o';
        }
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.gameArray[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameArray[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;