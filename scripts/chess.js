
window.onload = () => {
    "use strict";

    const chess = {
        boardContainerElem: document.querySelector('.board-container'),
        blackFiguresSetArr: figures.figuresBlackArr,
        whiteFiguresSetArr: figures.figuresWhiteArr,
        boardFiguresElemArr: [],

        renderBoard() {

            let numbers = [0, 8, 7, 6, 5, 4, 3, 2, 1];
            let letters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ' '];

            for (let i = 1; i <= 10; i++) {
                let rowElem = document.createElement('div');
                rowElem.classList.add('row');
                this.boardContainerElem.appendChild(rowElem);
                for (let j = 1; j <= 10; j++) {
                    let columnElem = document.createElement('div');
                    columnElem.classList.add('column');
                    rowElem.appendChild(columnElem);
                    if (i === 1 || i === 10) {
                        columnElem.innerHTML = `<p>${letters[j - 1]}</p>`;
                        columnElem.classList.add('border');
                        columnElem.classList.add('border-letters');
                        if (i === 1) {
                            columnElem.classList.add('rotate');
                        }
                    } else if (j === 1 || j === 10) {
                        columnElem.innerHTML = `<p>${numbers[i - 1]}</p>`;
                        if (j !== 1) {
                            columnElem.classList.add('rotate');
                        }
                        columnElem.classList.add('border');
                        columnElem.classList.add('border-numbers');
                    } else if (this.isRowBlack(i, j)) {
                        columnElem.classList.add('black');
                    }
                    if (!columnElem.classList.contains('border')) {
                        this.boardFiguresElemArr.push(columnElem);
                    }
                }
            }

        },


        isRowBlack(rowNum, colNum) {
            console.log(rowNum, colNum);
            if ((rowNum % 2 === 0 && colNum % 2 !== 0) || (rowNum % 2 !== 0 && colNum % 2 === 0)) {
                return true;
            }
        },

        initRenderFigures() {
            for (let x = 0; x < 8; x++) {
                let figureElem = this.renderFigureElem(this.blackFiguresSetArr[x].src, this.blackFiguresSetArr[x].id);
                this.boardFiguresElemArr[x + 8].appendChild(figureElem);

            }
            for (let x = 8; x < 16; x++) {
                let figureElem = this.renderFigureElem(this.blackFiguresSetArr[x].src, this.blackFiguresSetArr[x].id);
                console.log(this.blackFiguresSetArr[x].src);
                this.boardFiguresElemArr[x - 8].appendChild(figureElem);
            }
            for (let x = 0; x < 16; x++) {
                let figureElem = this.renderFigureElem(this.whiteFiguresSetArr[x].src, this.whiteFiguresSetArr[x].id)
                this.boardFiguresElemArr[x + 48].appendChild(figureElem);
            }
        },

        renderFigureElem(srcString, id) {
            let figure = document.createElement('img');
            figure.src = srcString;
            figure.setAttribute('id', id);
            return figure;

        },

    };
    console.log(chess.boardFiguresElemArr);
    chess.renderBoard();
    chess.initRenderFigures();


};

