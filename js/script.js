
// События форм и их элементов

// Событие change
// Срабатывает по окончании изменения элемента.

/*
В текстовых input и textarea работает также как и блур (потеря фокуса), 
но в select, radio, checkbox и т.тд сразу.
*/
const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;
const mainFormSelect = mainForm.nameSelect;
const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener("change", function (e) {
    console.log('Сработало change в input');
});
mainFormSelect.addEventListener("change", function (e) {
    console.log('Сработало change в select');
});
mainFormFile.addEventListener("change", function (e) {
    console.log('Сработало change в file' );
});
/*
Получаем несколт=ько полей - input, select и file.
В каждый из них навешиваем событие change и соответствующую строку выводим 
в консоль.

Поле ввода Input.
Вводим что-то, изменяем... ничего не происходит, но когда поле теряет фокус, 
например кликаем в другое место, срабатывает событие change и именно в этот 
момент поле изменено.

Поле ввода Select.
Мы что-то выбираем, и сразу же в этот момент срабатывает событие change на 
select'е.

Поле ввода File.
Мы кликаем "Выберите файл", выбираем некий файл и в этот момент срабатывает 
событие change. файл выбран.
*/