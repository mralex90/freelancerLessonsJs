
// DOM

// Поиск произвольного элемента

// elem.querySelector(CSS);

// Возвращает первый элемент внутри elem, соответствующий данному CSS-селектору.

const lessonList = document.querySelectorAll('.lesson__list')[0]; // эту запись можно заменить нижней
//const lessonList = document.querySelector('.lesson__list');
console.log(lessonList);/*

querySelector очень похож на querySelectorAll. 
На прошлых примерах уже видели, что если хотим получить обьект - нам все равно нужно получать коллекцию 
через querySelectorAll и потом, к примеру, брать первый обьект с помощью ключа в квадратных скобках.
querySelector делает это за нас, ища первый попавщийся обьект и сразу его возвращает.
Это удобно, т.к. не нужно искать обьекты, а потом брать только прервый.
Соответственно, querySelector будет раьотать быстрее.
*/