
// Элементы форм 

// Работа с select и option

const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Мультивыбор

/*
Элемент select можно переключить в режим мультивыбора. 
Это когда можно выбрать не только один option, а сразу несколько.
Для этого нам нужно установить атрибут multiple для select.
Также мы можем уже атрибут selected указывать не один раз, а несколько, 
например 2 раза. И именно 2 option будут изначально выбраны.
*/

// получаемм все выбранные значения из select с multiple
let selectedOption = Array.form(mainFormSelected.options)
    .filter(option => option.selected)
    .map(option => option.value);

console.log(selectedOptions);
/*
Пример:
Здесь приведен пример получения всех выбрных option в конкретном select.
Для этого используем метод массива "filter" и "map".
В итоге мы получаем новый массив, в котором собраны значения всех выбраных 
option. 
*/