
// События форм и их элементов

// Методы elem.focus() и elem.blur() устанавливают или снимают фокус.

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.focus();

setTimeout(() => {
    mainFormInput.blur();
}, 3000);
/*
Кроме событий фокустровки существуют еще и методы focus / blur. 
С их помощью мы можем управлять из ДЖС фокусировкой того или иного 
элемента. Например следующий код после загрузки страницы автоматически 
добавит фокус на элемент с именем "nameInput", а спустя 3 секунды 
фокус исчезнет.
*/