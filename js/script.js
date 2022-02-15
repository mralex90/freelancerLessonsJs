
// Элементы форм

// Работа с input и textarea

/*
Значение можно получить через свойство input.value(если это строка) 
или input.checked(если это булево значение) для чекбоксов и радиокнопок.
*/
const mainForm = document.forms.main;

const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;

// Получить значение поляtype radio
/*
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);
*/

// Получить значение поля type checkbox

console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);


// Получить значение поля type file
// console.log(mainFormFile.value);
//////////////////////////////////////////////////////////////////////
/*
Переходим к input с типом checkbox и здесь выполняем фактически те же действия:
выводим value в консоль и проверяем checked.
Итак, value вернет ON, потому что как и для радиоКнопок для этого чекбокса атрибут 
value не заполнен и по-умолчанию он также ON. И, собственно, checked вернет false, 
потому что наш чекбокс не выбран. 
*/