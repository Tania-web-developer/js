
window.onload = () => {

    console.log('задание 1');
    console.log('версия 1.1');

    let i = 3;
    while (i >= 2 && i < 100) {
        let count = 0;
        for (let j = 2; j <= i && count < 2; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 1) {
            console.log(i);
        }
        i++;
    };

    console.log('версия 1.2');

    let b = 3;
    while (b >= 2 && b < 100) {
        let a = true;
        for (let c = 2; c < b; c++) {
            if (b % c === 0) {
                a = false;
                break;
            }
        }
        if (a === true) {
            console.log(b);
        }
        b++;
    };

    console.log('задание 2');
    
    const cartArr = [
        {
            name: 'T-shirt',
            price: 100,

        },
        {
            name: 'T-shirt',
            price: 400,

        },
        {
            name: 'T-shirt',
            price: 500,

        },
        {
            name: 'T-shirt',
            price: 900,

        },
    ];
    console.log(cartArr);
    
    console.log('задание 3');

    function getTotalCart(arr) {
        let total = 0;
        arr.map(elem => {
            total += elem.price;
        })
        return `всего: ${total} руб.`;
    };

    console.log(getTotalCart(cartArr));

    console.log('задание 4');

    for (let i = 0; i < 10; console.log(i), i++) { }

    console.log('задание 5');
    let piramid = 'x';
    let n = 0; 
    while (n < 20){       
        console.log(piramid);
        piramid = piramid + 'x';
        n++;
    }

    



};
