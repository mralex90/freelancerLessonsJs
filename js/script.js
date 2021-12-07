// Массивы

/*
это отдельный подвид обьектов. Он позволяет нам хранить данные, но в отличии от 
обьектов управлять этими данными мы можем гораздо гибче.
*/

// Создание массива

/*
Создать массив можно одним из двух способов:
1) с помощью new Array()
2) либо с помощью квадратных скобок []  -  чаще всего
*/
let arr = new Array();
let arr = [];

// Значение массива 
let arrOne = [
    'Alex', // Висячая запятая
    'Ivan',
    'Olya', 
];
// или
let arrOne = ['Alex', 'Ivan', 'Olya',];
/*
Запполнять массив значениями, т.е. его элементами следует через запятую.
После последнего элемента тоже допускается указание запятой, ее еще называют 
"висячей", более того это хорошая практика, т.к. мы легко и быстро можем порядок 
элементов, при этом никакой ошибки не возникнет.
*/

/////////// Различные типы значений
let arrTwo = [
    "Oleks",
    {
        type: "JS",
        age: 30
    },
    true,
    function () {
        console.log('Hello, Im Oleks');
    }
];

// Многомерные массивы
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/*
В массивах допускаются абсолютно разные типы значений. Здесь мы можем увидеть 
простую строку, и отдельный обьект со своими элементами, и булевый тип и даже 
ф-ию. 
Так же существуют многомерные массивы где элемент массива является отдельным массивом 
со своими элементами.
*/