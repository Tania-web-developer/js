
window.onload = () => {
    // //// задание 1 ////
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 потому что префикс return новое значение 1+a
    d = b++; alert(d);           // 1 потому что постпрефикс return старое значение b
    c = (2 + ++a); alert(c);      // 5 потому что уже a=2, +1 => a = 3 => далее 2+3 = 5
    d = (2 + b++); alert(d);      // 4 потому что b=1, +1 => b = 2  ,  далее 2+2 = 4
    alert(a);                    // 3 потому что строка №4 a=2, после строки №6 а=3
    alert(b);                    // 3 потому что строка №5 b+1=2, после строки №7 b=2+1=3

    // //// задание 2 ////
    var a = 2;
    var x = 1 + (a *= 2);        // х будет равен 5 , так как *= это сокращенный опператор умножения


    // //// задание 3 ////
    let e = 0;
    let f = 5;
    // если a и b положительные, вывести их разность;
    // если а и b отрицательные, вывести их произведение;
    // если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
    if (e >= 0 && f >= 0) {
        alert(e - f);
    } else if (e < 0 && f < 0) {
        alert(e * f);
    } else if (e >= 0 && f < 0 || e < 0 && f >= 0) {
        alert(e + f);
    }


    // //// задание 4 ////
    // ///* вариант 1 *////
    a = parseInt(prompt('Введите число от 1 до 15'));
    switch (a) {
        case 1:
            alert(a);
            break;
        case 2:
            alert(a);
            break;
        case 3:
            alert(a);
            break;
        case 4:
            alert(a);
            break;
        case 5:
            alert(a);
            break;
        case 6:
            alert(a);;
            break;
        case 7:
            alert(a);
            break;
        case 8:
            alert(a);
            break;
        case 9:
            alert(a);
            break;
        case 10:
            alert(a);
            break;
        case 11:
            alert(a);
            break;
        case 12:
            alert(a)
            break;
        case 13:
            alert(a)
            break;
        case 14:
            alert(a)
            break;
        case 15:
            alert(a)
            break;
    }

    ///* вариант 2 *////
    let j = parseInt(prompt('Введите число от 1 до 15'));

    function recursion(num, i) {
        if (i === num) {
            return num;
        } else {
            return recursion(num, i + 1)
        }

    }

    alert(recursion(j, 1));

    // //// задание 5 ////
    let num1 = 2;
    let num2 = 3;

    function plus(num1, num2) {
        return num1 + num2;
    }

    function minus(num1, num2) {
        return num1 - num2;
    }

    function div(num1, num2) {
        return num1 / num2;
    }

    function mult(num1, num2) {
        return num1 + num2;
    }

    console.log(mult(3, 4));
    console.log(div(12, 4));
    console.log(minus(5, 3));
    console.log(plus(5, 3));

    // //// задание 6 ////
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'plus':
                return arg1 + arg2;

            case 'minus':
                return arg1 - arg2;

            case 'div':
                return arg1 / arg2;

            case 'mult':
                return arg1 * arg2;

        }
    }

    // //// задание 7 ////
    let compare = () => {
        console.log(null === 0); // false 1. потому что это разные типы данных
        console.log(null > 0); // false 2. null представляет отсутствие какого-либо объектного значения, 0 значит значение 0
        console.log(null < 0); // false        
        console.log(typeof (null));  // object 3. плюс ко всему null это обьект это ошибка языка но ее оставили
        //null === undefined // false с первым, выполняется преобразование типов. 
        //null == undefined // true без сравнивания типов
        //null >= 0; // true Перед сравнением операнды сначала преобразуются в примитивы, а затем в тот же тип
        //null <= 0; //true
        // null == 0; //false 
    }
    compare();

    // //// задание 8 ////

    function pow(x, y) {
        return (y == 1) ? x : (x * pow(x, y - 1));
    }
    console.log(pow(4, 5));

};
