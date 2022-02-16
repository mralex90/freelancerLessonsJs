
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

// Получить значение поля type radio
mainFormRadioButtons[0].value = "left";
mainFormRadioButtons[1].value = "right";
mainFormRadioButtons[0].checked = true;

// Назначить значение поля type checkbox
/*
mainFormCheckBox.value = "save";
mainFormCheckBox.checked = true;
*/

// Назначить значение поля type file
//mainFormFile.value = "";

/*
Теперь научимся  присваивать значения этим эдементам из ДЖС.
Начнем с радиоКнопок.
Для того,чтобы это сделать нужно сделать следующее: обращаемся к той или 
иной кнопке, пишем value, присваиваем новое значение этого атрибута. А для того, 
чтобы выбрать ту или иную кнопку - мы используем "checked".
*/

/*
То же самое мы делаем с чекбоксом - с помощью value мы задаем свое значение этого 
атрибута, а с помощью checked = true/false мы управляем выбран этоти обьект или нет.
*/
/*
Другая ситуация складывается с типом "file", так как мы не можем задать значение 
этого поля вот таким образом.
Все что мы можем сделать - это очистить хначение, т.е. передать пустую строку.
*/

