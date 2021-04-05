const settings = {
    rowsNum: 20,
    colsNum: 20,
    speed: 5,
    winFoodNum: 50,

};

const config = {
    settings,

    init(userSettings) {
        Object.assign(this.settings, userSettings);
    },

    getRowsNum() {
        console.log(this.settings.rowsNum);
        return this.settings.rowsNum;
    },

    getColsNum() {
        console.log(this.settings.rowsNum);
        return this.settings.colsNum;
    },

    getSpeed() {
        return this.settings.speed;
    },

    getWinFoodCount() {
        return this.settings.winFoodNum;
    },

    validate() {
        const result = {
            isValid: false,
            errors: [],
        };

        if (this.settings.rowsNum < 10 || this.settings.rowsNum > 30) {
            result.isValid = false;
            result.errors.push('Incorrect settings the value of the rows should be in the range [of 10 to 30]');
        }
        if (this.settings.colsNum < 10 || this.settings.colsNum > 30) {
            result.isValid = false;
            result.errors.push('Incorrect settings the value of the columns should be in the range [of 10 to 30]');
        }
        if (this.settings.speed < 1 || this.settings.speed > 10) {
            result.isValid = false;
            result.errors.push('Incorrect settings the value of the speed should be in the range [of 1 to 10]');
        }
        if (this.settings.winFoodNum < 5 || this.settings.winFoodNum > 50) {
            result.isValid = false;
            result.errors.push('Incorrect settings the value of the winFoodNum should be in the range of 5 to 50');
        } else result.isValid = false;

        result.isValid = true;
        return result;
    },
};

const map = {
    cells: null,
    usedCells: null,

    init(rowsNum, colsNum) {
        const boardElem = document.getElementById('game_board');
        boardElem.innerHTML = '';
        this.cells = {};
        this.usedCells = [];

        for (let row = 0; row < rowsNum; row++) {
            const trElem = document.createElement('div');
            trElem.classList.add('b-game__row');
            boardElem.appendChild(trElem);
            for (let col = 0; col < colsNum; col++) {
                const tdElem = document.createElement('div');
                tdElem.classList.add('b-game__col');
                this.cells[`x${col.toString()}_y${row.toString()}`] = tdElem;
                trElem.appendChild(tdElem);
            }
        }

    },

    render(snakePointArray, foodPoint) {

        for (const cell of this.usedCells) {
            cell.className = 'b-game__col';
        }

        this.usedCells = [];

        snakePointArray.forEach((point, index) => {
            const snakeCell = this.cells[`x${point.x}_y${point.y}`];
            snakeCell.classList.add(index === 0 ? 'snakeHead' : 'snakeBody');
            this.usedCells.push(snakeCell);
        });

        const foodCell = this.cells[`x${foodPoint.x}_y${foodPoint.y}`];
        foodCell.classList.add('food');
        this.usedCells.push(foodCell);        
    },

    wallRender(wallPoint){
        const wallCell = this.cells[`x${wallPoint.x}_y${wallPoint.y}`];       
        wallCell.classList.add('wall');        
        this.usedCells.push(wallCell);
    },    
};

const snake = {
    body: null,
    direction: null,
    lastStepDirection: null,

    init(startBody, direction) {
        this.body = startBody;
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getBody() {
        return this.body;
    },

    makeStep() {
        this.lastStepDirection = this.direction;
        this.body.unshift(this.getNextStepHeadPoint());
        this.body.pop();
    },

    getNextStepHeadPoint() {
        const firstPoint = this.body[0];
        switch (this.direction) {
            case 'up':
                return { x: firstPoint.x, y: firstPoint.y - 1 };
            case 'right':
                return { x: firstPoint.x + 1, y: firstPoint.y };
            case 'down':
                return { x: firstPoint.x, y: firstPoint.y + 1 };
            case 'left':
                return { x: firstPoint.x - 1, y: firstPoint.y };
            default:
                break;
        }

    },

    setDirection(direction) {
        this.direction = direction;
    },

    growUp() {
        const lastBodyIndex = this.body.lenght - 1;
        const lastBodyPoint = this.body[lastBodyIndex];
        const lastBodyPoinClone = Object.assign({}, lastBodyPoint);
        this.body.push(lastBodyPoinClone);
    },

    isOnPoint(point) {
        return this.body.some(snakePoint => snakePoint.x === point && snakePoint.y === point.y);
    },

    getlastStepDirection() {
        return this.lastStepDirection;
    }
};

const food = {
    x: null,
    y: null,

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
};

const status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },
    setStopped() {
        this.condition = 'stopped';
    },
    setFinished() {
        this.condition = 'finished'
    },
    isPlaying() {
        return this.condition === 'playing';
    },
    isStopped() {
        return this.condition === 'stopped';
    },


};

const wall = {

    x: null,
    y: null,
    walls: null,   

    init(startBody, direction) {
        this.body = startBody;        
    },

    getBody() {
        return this.body;
    },    

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
    
};

const score = {
    count: null,
    countElem: null,
    init() {
        this.render();
    },
    increment() {
        this.count += 1;
        this.render();
    },
    drop() {
        this.count = 0;
        this.render();
    },
    render() {
        document.getElementById('score-count').innerHTML = this.count;
    }
};

const game = {
    map,
    config,
    snake,
    food,
    status,
    score,
    wall,
    tickInterval: null,

    init(userSettings) {
        this.config.init(userSettings);
        const validation = this.config.validate();
        if (!validation.isValid) {
            for (err of validation.errors) {
                console.error(err);
            }
            return;
        }
        this.map.init(this.config.getRowsNum(), this.config.getColsNum());
        this.setEventHandlers();
        this.reset();
        this.score.render();
    },

    reset() {
        this.stop();
        this.snake.init(this.getStartSnakeBody(), 'up');
        this.food.setCoordinates(this.getRandomFreeCoordinates());
        this.wall.setCoordinates(this.getRandomFreeCoordinates());       
        this.render();
        this.score.drop();
    },

    play() {
        this.status.setPlaying();
        this.tickInterval = setInterval(() => this.tickHandler(), 1000 / this.config.getSpeed());       
        this.setPlayButton('STOP');
    },

    stop() {
        this.status.setStopped();
        clearInterval(this.tickInterval);        
        this.setPlayButton('PLAY');
    },

    finish() {
        this.status.setFinished();
        clearInterval(this.tickInterval);
        this.setPlayButton('END', true);
    },

    tickHandler() {
        if (!this.canMakeStep()) {
            return this.finish();
        }
        if (this.food.isOnPoint(this.snake.getNextStepHeadPoint())) {
            this.snake.growUp();
            this.score.increment();
            this.food.setCoordinates(this.getRandomFreeCoordinates());
            if (this.isGameWon()) {
                return this.finish();
            }
        }
        
        if (this.wall.isOnPoint(this.snake.getNextStepHeadPoint())) {
            return this.finish();
        }
        this.snake.makeStep();
        this.map.wallRender(this.wall.getCoordinates());
        this.render();
    },


    isGameWon() {
        return this.snake.getBody().lenght > this.config.getWinFoodCount();
    },

    setPlayButton(textContent, isDisabled = false) {
        const playButtonElem = document.getElementById('play_game_button');
        playButtonElem.textContent = textContent;
        isDisabled ? playButtonElem.classList.add('disabled') : playButtonElem.classList.remove('disabled');
    },

    render() {
        this.map.render(this.snake.getBody(), this.food.getCoordinates());
    },

    getStartSnakeBody() {
        return [{
            x: Math.floor(this.config.getColsNum() / 2),
            y: Math.floor(this.config.getRowsNum() / 2),
        }];
    },

    getRandomFreeCoordinates() {
        const exclude = [this.food.getCoordinates(), ...this.snake.getBody()];
        while (true) {
            const randomPoint = {
                x: Math.floor(Math.random() * this.config.getColsNum()),
                y: Math.floor(Math.random() * this.config.getRowsNum()),
            };
            console.log(randomPoint);
            if (!exclude.some(exPoint => randomPoint.x === exPoint.x && randomPoint.y === exPoint.y)) {
                console.log(randomPoint);
                return randomPoint;
            }
        }

    },

    setEventHandlers() {
        document.getElementById('play_game_button').addEventListener('click', () => this.playClickHandler());
        document.getElementById('new_game_button').addEventListener('click', (event) => this.newGameClickHandler(event));
        document.addEventListener('keydown', event => this.keyDownHandler(event));
    },

    keyDownHandler(event) {
        if (!this.status.isPlaying()) {
            return;
        }
        const direction = this.getDirectiobByCode(event.code);
        if (this.canSetDirection(direction)) {
            this.snake.setDirection(direction);
        }
    },

    getDirectiobByCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
            default:
                return '';
        }
    },

    playClickHandler() {
        console.log(this.status.condition);
        if (this.status.isPlaying()) {
            this.stop();
        } else if (this.status.isStopped()) {
            this.play();
        }

    },

    canMakeStep() {
        const nextHeadPoint = this.snake.getNextStepHeadPoint();
        return !this.snake.isOnPoint(nextHeadPoint) &&
            nextHeadPoint.x < this.config.getColsNum() &&
            nextHeadPoint.y < this.config.getRowsNum() &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;
    },

    newGameClickHandler() {
        this.reset();
    },

    canSetDirection(direction) {
        const lastStepDirection = this.snake.getlastStepDirection();

        return direction === 'up' && lastStepDirection !== 'down' ||
            direction === 'right' && lastStepDirection !== 'left' ||
            direction === 'down' && lastStepDirection !== 'up' ||
            direction === 'left' && lastStepDirection !== 'right';
    },
};



window.addEventListener('load', () => game.init({ speed: 2, getWinFoodNum: 3 }));






