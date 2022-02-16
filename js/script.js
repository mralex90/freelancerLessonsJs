
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

const mainForm =  document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Получить все options
console.log(mainFormSelect.options);

// Получить индекс выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);
// Получить значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);
// Получить текст выбранного option 
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);

/*

*/
