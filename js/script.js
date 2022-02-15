
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
/*
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);
*/

// Получить значение поля type file
console.log(mainFormFile.value);
//////////////////////////////////////////////////////////////////////
/*
Input с типом file.
Это такая штука, где мы можем выбрать например какую-то картинку или любой другой 
файл. Здесь можем получить значение с помощью "value", в данный момент оно пустое, 
никакой файл не выьран.
*/