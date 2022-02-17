
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
const mainFormSelect = mainForm.nameSelect;

// Выбрать некий option
// mainFormSelect.options[1].selected = true;  ///  1)
// mainFormSelect.selectedIndex = 1;           ///  2)
// mainFormSelect.value = 2;                   ///  3)

/*
Если мы хотим влиять на значение элемента select из ДЖС, то мы можем это сделать 
одним из следующих способов:

1) Во-первых, обратиться к конкретному option, далее свойство selected присвоить true,
    и теперь у нас будет выбран второй option.
2) То же самое можно сделать просто изменив selectedIndex, (напр. был 0, указываем 
    1 и опять же у нас будет выбран второй пункт).
3) Также мы просто можем повлиять на value-назначение нашего selected, и здесь указать 
    значение какого же option нам нужно (напр. указываем 2 и у нас опять выбран второй).
*/