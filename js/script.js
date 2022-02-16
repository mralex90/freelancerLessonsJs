
// Элементы форм 

// Работа с select и option
/*
Элемент <select> имеет 3 важных свойства:
select.options - коллекция из подэлементов <option>,
select.value - значение выбраного в данный момент <option>,
select.selectedIndex - номер выбранного <option>.

Они дают три разных способа устранить значение в <select>:
Найти соответствующий элемент <option> и установить в option.selected 
значение true.
Установить в select.value значение нужного <option>.
Установить в select.selectedIndex номер нужного <option>.

Первый способ наиболее понятный, но (2) и (3) являются более удобными в работе.
*/

const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect; /* в эту константу получаем элемент нашего списка */

// Чтобы Получить все options - обращаемся к списку, ставим точку и пишем options
// При выводе в консоль получим коллекцию наших обьектов
console.log(mainFormSelect.options);

/*  Получить индекс выбранного option
Используем selectedIndex, в итоге получаем 0, т.е. нулевой индекс - первый индекс в ХТМЛ у нас 
выбран, поэтому мы получаем это значение.
*/
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);

/* Получить значение выбранного option,
т.е. значение атрибута value, мы используем свойство value и получаем 1. Именно это указано в примере в ХТМЛ.
*/
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);

/* Получить текст выбранного option, 
тогда обращаемся к нашему select, пишем options, но, в квадратных скобках указываем индекс выбранного 
option. Далее ставим точку и пишем text. При выводе в консоль и получим 20, а именно текст выбранного option
*/
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);

/*
11/37
*/
