const dataGameObj = {
    a: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
        'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
        'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    aQnty: 2,
    a1: '1 - Поспать до обеда\n',
    a2: '2 - Пойти прогуляться\n',
    b: 'Вы решили поспать до обеда.\n' +
        'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
        'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    bQnty: 2,
    b1: '1 - Пойти прогуляться\n',
    b2: '2 - Пойти пообедать\n',
    c: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
        'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
        'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
        'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
        'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
        'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
    cQnty: 2,
    c1: '1 - Подождать обед в столовой\n',
    c2: '2 - Поколоть дров перед обедом\n',
    d: 'Вы решили прогуляться, вы решаете...?\n',
    dQnty: 2,
    d1: '1- Прогуляться по лесу\n',
    d2: '2- Прогуляться вдоль озера\n',
    e: 'Вы решили пойти пообедать, Вы решаете ?\n',
    eQnty: 2,
    e1: '1- Подождать обед и поиграть на пианино\n',
    e2: '2- Подождать в столовой\n'
};

const dataMillionaireArr = [
    {
        question: 'Кем был мужчина, послуживший моделью для известной картины «Американская готика» Гранта Вуда?\n',
        answers: {
            a: 'a-Коммивояжером\n',
            b: 'b-Местным шерифом\n',
            c: 'c-Его зубным врачом\n',
            d: 'd-Его мясником\n',
        },
        correctAnswer: 'd',
    },
    {
        question: 'Какое насекомое вызвало короткое замыкание в ранней версии вычислительной машины, тем самым породив термин «компьютерный баг» («баг» в переводе с англ. «насекомое»)?\n',
        answers: {
            a: 'a-Мотылек\n',
            b: 'b-Таракан\n',
            c: 'c-Муха\n',
            d: 'd-Слоном\n',
        },
        correctAnswer: 'a',

    },
    {
        question: 'Под каким названием известна единица с последующими ста нулями?\n',
        answers: {
            a: 'a-Гугол\n',
            b: 'b-Мегатрон\n',
            c: 'c-Гигабит\n',
            d: 'd-Наномоль\n',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Какая единица измерения названа в честь итальянского дворянина?\n',
        answers: {
            a: 'a-Паскаль\n',
            b: 'b-Ом\n',
            c: 'c-Вольт\n',
            d: 'd-Герц\n',
        },
        correctAnswer: 'c',
    },

]

const figures = {

    figuresWhiteArr: [
        { id: 'PW1', pos: 'a2', src: './img/pw.svg' },
        { id: 'PW2', pos: 'b2', src: './img/pw.svg' },   
        { id: 'PW3', pos: 'c2', src: './img/pw.svg' },   
        { id: 'PW4', pos: 'd2', src: './img/pw.svg' },         
        { id: 'PW5', pos: 'e2', src: './img/pw.svg' },
        { id: 'PW6', pos: 'f2', src: './img/pw.svg' },
        { id: 'PW7', pos: 'g2', src: './img/pw.svg' },
        { id: 'PW8', pos: 'h2', src: './img/pw.svg' },        
        { id: 'RW1', pos: 'a1', src: './img/rw.svg' },
        { id: 'NW1', pos: 'c1', src: './img/nw.svg' },
        { id: 'BW1', pos: 'b1', src: './img/bw.svg' },        
        { id: 'QW0', pos: 'd1', src: './img/qw.svg' },        
        { id: 'KW0', pos: 'e1', src: './img/kw.svg' },       
        { id: 'BW1', pos: 'g1', src: './img/bw.svg' },
        { id: 'NW2', pos: 'h1', src: './img/nw.svg' },
        { id: 'RW2', pos: 'f1', src: './img/rw.svg' },
        
        
    ],

    figuresBlackArr: [     
        { id: 'PB1', pos: 'a7', src: './img/pb.svg' },
        { id: 'PB2', pos: 'b7', src: './img/pb.svg' },   
        { id: 'PB3', pos: 'c7', src: './img/pb.svg' },   
        { id: 'PB4', pos: 'd7', src: './img/pb.svg' },         
        { id: 'PB5', pos: 'e7', src: './img/pb.svg' },
        { id: 'PB6', pos: 'f7', src: './img/pb.svg' },
        { id: 'PB7', pos: 'g7', src: './img/pb.svg' },
        { id: 'PB8', pos: 'h7', src: './img/pb.svg' },   
        { id: 'RB1', pos: 'a8', src: './img/rb.svg' },
        { id: 'NB1', pos: 'c8', src: './img/nb.svg' },
        { id: 'BB1', pos: 'b8', src: './img/bb.svg' },        
        { id: 'QB0', pos: 'd8', src: './img/qb.svg' },        
        { id: 'KB0', pos: 'e8', src: './img/kb.svg' },        
        { id: 'BB1', pos: 'g8', src: './img/bb.svg' },
        { id: 'NB2', pos: 'h8', src: './img/nb.svg' },
        { id: 'RB2', pos: 'f8', src: './img/rb.svg' },
        
    ],

};


const productsArr = [
    {
        product_id: 1,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image__1.jpg",
        srcS: "/img/image_1.jpg",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: 300,
        color: "red",
        size: "XL",
       
    },
    {
        product_id: 2,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image__2.jpg",
        srcS: "./img/image_2.jpg",
        description: `Known for her sculptural takes 
        on traditional tailoring, 
        Australian arbiter of cool Kym Ellery teams up
        with Moda Operandi.`,
        price: 300,
        color: "red",
        size: "XL",
       
    },
    {
        product_id: 3,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image__3.jpg",
        srcS: "./img/image_3.jpg",
        description: "",
        price: 300,
        color: "red",
        size: "XL",
        
    },
    {
        product_id: 4,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image___4.jpg",       
        description: "",
        price: 300,
        color: "red",
        size: "XL",
        
    },
    {
        product_id: 5,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image__5.jpg",
        srcS: "./img/image_5.jpg",
        description: "",
        price: 300,
        color: "red",
        size: "XL",
        
    },
    {
        product_id: 6,
        brand: "MANGO PEOPLE",
        name: "T - SHIRT",
        src: "./img/image__6.jpg",
        srcS: "./img/image_6.jpg",
        description: "",
        price: 300,
        color: "red",
        size: "XL",
       
    },
    
];







