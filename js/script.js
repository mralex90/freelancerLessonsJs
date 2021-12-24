
// DOM

// Поиск произвольного элемента

// document.getElenentById(ID) & elem.getElementsBy*

// На данный момент, они используются редко, т.к. querySelectorAll может их заменить. Но отличия все же есть!

//document.getElenentById(ID)
/*
Если у элемента есть атрибут "id", то мы можем получить его вызовом document.getElenentById(ID), 
где бы он не находился в документе.
*/
const elem = document.getElementById('listItem');
console.log(elem);
/*
Здесь важны два отличия:
1. id - уникален на странице
2. Поиск только внутри обьекта document, т.е.обязательно писать document.getElementById.
    Дальше пишем () и в кавычках указываем сразу имя АЙДИ. Теперь не нужно писать #, 
    т.к. и так ясно что ищем по АЙДИ. Пишет только имя значения данного атрибута.
*/