
// События форм и их элементов

// События focus и blur

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener("focus", function (e) {
    mainFormInput.placeholder = "";
});
mainFormInput.addEventListener("blur", function (e) {
    mainFormInput.placeholder = mainFormInputPlaceholder;
});

// Действия могут быть самыми разными: валидация поля, отправка формы и т.д.
/*
Пример:
В константы получаем саму форму, поле ввода с именем "nameInput", а также в 
отдельную константу "mainFormInputPlaceholder" получаем значение атрибута 
"placeholder" этого поля ввода.
В placeholder сейчас написано "Введите что-то...". Так вот, нам нужно чтобы когда 
поле получало фокус, этот placeholder был равен пустой строке, т.е. исчезал.
А в момент потери фокуса, если поле не заполнено, то мы опять увидим placeholder, 
а именно "ВВедите что-то...".
Это работает так:
Мы кликаем на элемент (он получает фокус) - placeholder исчез, и теперь мы можем 
что-то вводить. Момент потери фокуса мы увидим то что мы ввели, т.к. placeholder 
в данный момент скрыт. Но, если мы оставим пустую строку и потеряем фокус - мы увидим 
placeholder.

Выполняется это с помощью простых манипуляций. В момент получения фокуса, т.е. по событию 
"focus" мы передаем значение для атрибута placeholder пустую строку таким образом 
мы добиваемся того, что placeholder исчезает (mainFormInput.placeholder = "";).
Но, в момент потери фокуса, поскольку мы заранее получили в константу значение "placeholder", 
мы возвращаем это значение в атрибут (mainFormInput.placeholder = mainFormInputPlaceholder).
И если поле пустое в момент потери фокуса, мы увидим значение "placeholder".

*/ 