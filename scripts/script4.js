
window.onload = () => {

    'use strict ';
    ////////////////////////////////////////////////////////////////////////////
    console.log('Задание 1 вариант 1'); //// вариант с числом    

    const gameNumToObj = (num) => {
        let objFromNum;

        function getobjFromNum(units = '', tens = '', hundreds = '') {
            return {
                units: units,
                tens: tens,
                hundreds: hundreds
            };
        };

        if (num <= 999 && num > 0) {
            let hundreds = Math.floor(num / 100);
            let tens = Math.floor((num - (hundreds * 100)) / 10);
            let units = num - ((hundreds * 100) + (tens * 10));
            objFromNum = getobjFromNum(units, tens, hundreds);
        } else {
            console.log('Число превышает 999');
            objFromNum = getobjFromNum();

        }

        return objFromNum;
    };
    console.log(gameNumToObj(245));

    ////////////////////////////////////////////////////////////////////////////

    console.log('Задание 1 вариант 2'); //// вариант со строкой

    const gameNumToObj2 = (num) => {
        let objFromNum;
        function getobjFromNum(units = '', tens = '', hundreds = '') {
            return {
                units: units,
                tens: tens,
                hundreds: hundreds
            };
        };
        if (num <= 999 && num > 0) {
            let str = num.toString();
            objFromNum = getobjFromNum(str[2], str[1], str[0]);
        } else {
            console.log('Число превышает 999');
            objFromNum = getobjFromNum();
        }
        return objFromNum;
    };
    console.log(gameNumToObj2(245));

    ////////////////////////////////////////////////////////////////////////////
    console.log('Задание 2');

    function gameQuiz() {
        const userAnswerssArr = [];
        let { a, aQnty, a1, a2 } = dataGameObj;
        let { b, bQnty, b1, b2 } = dataGameObj;
        let { c, cQnty, c1, c2 } = dataGameObj;
        let { d, dQnty, d1, d2 } = dataGameObj;
        let { e, eQnty, e1, e2 } = dataGameObj;
        function getUserAnswer(question, choice1, choice2, qnty) {
            let isAnswer = false;
            let userAnswer;

            do {
                userAnswer = parseInt(prompt(`${question}${choice1}${choice2}-1 - Выход из игры`));
                if (userAnswer === -1) {
                    alert('Игра завершена');
                    return;
                }
                if (isNaN(userAnswer) || !isFinite(userAnswer)) {
                    alert('Вы ввели недопустимый символ');
                    isAnswer = false;
                } else if (userAnswer < 1 || userAnswer > qnty) {
                    alert('Ваше число выходит из диапазона');
                    isAnswer = false;
                } else isAnswer = true;
            } while (!isAnswer);
            userAnswerssArr.push({ question: question, answerNum: userAnswer, choice1: choice1, choice2: choice2 });
            return userAnswer;
        };
        function showInfoAnswer(i, arr) {
            console.log(arr);
            if (arr[i].answerNum === 1) {
                alert(`Вопрос: ${arr[i].question} - ваш ответ: ${arr[i].choice1} `);
            } else { alert(`Вопрос: ${arr[i].question} - ваш ответ: ${arr[i].choice2} `); }

        };
        switch (getUserAnswer(a, a1, a2, aQnty)) {
            case 1:
                switch (getUserAnswer(b, b1, b2, bQnty)) {
                    case 1: (getUserAnswer(d, d1, d2, dQnty));
                        break;
                    case 2: (getUserAnswer(e, e1, e2, eQnty));
                        break;

                }
                break;
            case 2:
                getUserAnswer(c, c1, c2, cQnty);
                break;

        }
        alert('Спасибо за игру');
        if (userAnswerssArr.length !== 0) {
            let numAnswer;
            do {
                numAnswer = parseInt(prompt(`Введите номер вопроса в диапазоне от 1 до  ${userAnswerssArr.length}`));

            } while (userAnswerssArr.length < numAnswer || isNaN(numAnswer) || !isFinite(numAnswer));
            switch (numAnswer) {
                case 1:
                    showInfoAnswer(0, userAnswerssArr);
                    break;
                case 2:
                    showInfoAnswer(1, userAnswerssArr);
                    break;
                case 3:
                    showInfoAnswer(2, userAnswerssArr);
                    break;
                case 4:
                    showInfoAnswer(3, userAnswerssArr);
                    break;

            }


        }
        console.log(userAnswerssArr);

    };

    gameQuiz();

    ////////////////////////////////////////////////////////////////////////////
    console.log('Задание 3');    
    const gameMillionaire = {
        scoreCount: 0,
        gameСycleIndex: 0,
        gameСycleObj: {},

        reset() {
            this.questionIndex = 0;
            this.scoreCount = 0;
        },

        getCurrentCycle() {
            this.gameСycleObj = dataMillionaireArr[this.gameСycleIndex];
        },

        run() {
            while (true) {                
                this.getCurrentCycle();
                const userAnswer = this.getUserAnswer();
                this.gameСycleIndex++;
                if (this.isAnswerCorrect(userAnswer)) {
                    this.scoreCount++;
                }
                if (this.isGameOver()) {
                    return;
                }   
                if (!confirm('Хотите продолжить игру?')) {
                    return alert('До свидания.');
                }
            }

        },

        getUserAnswer() {                        
            while (true) {
                const userAnswer = prompt(`${this.gameСycleObj.question}${this.gameСycleObj.answers.a}${this.gameСycleObj.answers.b}${this.gameСycleObj.answers.c}${this.gameСycleObj.answers.d}`);               
                if (this.validateAnswer(userAnswer)) {
                    return userAnswer;
                }
            }
        },

        validateAnswer(userAnswer) {
            const availableAnswers = ['a', 'b', 'c', 'd'];
            if (!availableAnswers.includes(userAnswer)) {
                alert(`Необходимо ввести букву, которая соотвествует ответу: ${availableAnswers.join(', ')}.`);
                return false;
            }
            return true;
        },

        isAnswerCorrect(userAnswer) {            
            if (userAnswer === this.gameСycleObj.correctAnswer) {
                alert('Поздравляем! Это правильный ответ.');
                return true;

            }
            alert(`Это неверный ответ. Верный ответ был под буквой: ${this.gameСycleObj.correctAnswer}`);
            return false;
        },

        isGameOver() {
            if (this.gameСycleIndex === dataMillionaireArr.length) {
                alert(`Игра закончена. Спасибо за участие. Количество правильных ответов ${this.scoreCount}.`);
                return true;
            }
            return false;
        },



    };
    gameMillionaire.run();

};

