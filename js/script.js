
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
// console.log(mainFormFile.value);
//////////////////////////////////////////////////////////////////////
/*
Другие типы тега input: radio / checkbox / file
Мы их получили в соответствующие константы.

Начнем с радиоКнопок, в данном случае константа mainFormRadioButtons 
будет не одним элементом, а целой коллекцией, в данном случае состоящей 
из двух элементов. По этому будем обращаться с помощью квадратных скобок 
и ключа к каждому элементу.
Итак, что бы получить значение обьекта с типом "radio", и не только значение, 
также получить ответ на вопрос(отмечен/выбран этот элемент или нет) можно 
следующим образом: обращаемся к первому обьекту(т.е. кнопка №1) и получаем 
значение. Если атрибут "value" ничем не заполнен, то, по умолчанию, значением 
будет ON. Тоже самое значение будет и у второй кнопки.
Далее проверяем выбрана ли эта кнопка в данный момент.
Итак, первая кнопка выбрана, по-этому свойство checked вернет true, вторая, 
соответственно, не выбрана - вернет false. 
Напоминание: тем какая именно кнопка будет выбрана мы можем управлять с помощью 
атрибута "checked", который задан нужному обьекту.
*/