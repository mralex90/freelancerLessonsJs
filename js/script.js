// Спецсимволы

/*
Внутри строк можно использовать ряд спецсимволов. Все спецсимволы 
начинаются с обратного слэша, \ - так называемого "символа экранирования".
Вот несколько из них:
*/

// Перевод строки \n

let textOne = `Hello!
Youre learning 
JS`;
console.log(textOne);

let textTwo = "Hello!\nYour learning\nJS";
console.log(textTwo);
/*
У нас есть переменная "textTwo", где мы записали некий текст, но 
отдельные слова мы разделили спецсимволом перевода строки. В итоге 
оба эти варианта будут давать одинаковый результат.
*/

///////

// Табуляция (отступ) \t

let text = "Hello!\n\tYour learning\n\t\tJS";
console.log(text);

/*
У нас есть переменная "текст" куда мы добавляем некую строку. Но теперь 
мы разделяем слова не только переводом строки, но и спецсимволом табуляции.
В итоге мы видим некий отступ слева в тех местах где мы установили этот 
спецсимвол, при чем количество используемых спецсимволов влияет на размер 
этого отступа.
*/

/////////

// Обратный слеш \\

let text1 = "Hello! I'm Alex \\ and I study JS";
console.log(text1);

/*
Бывают ситуации когда внутри строки нам нужно использовать обратный слеш, но 
при такой записи мы увидим, что в результате слеш не вывелся. Все потому, что 
ДЖС воспринимает его как начало спецсимвола и не выводит. Чтобы показать 
обратный слеш нам нужно записать ДВА обратных слеша. 
*/

///////

// Кавычки \' \"

let text2 = "Hello! I'm Alex and \"lets study!\"";
console.log(text2);

/*
Кавычки внутри строки. Часто бывает что нам нужно использовать те или иные 
кавычки для вывода некоего словосочетания именно в кавычках. так вот если 
будем использовать одинаковые кавычки - получим ошибку.
Мы можем использовать разные кавычки или использовать специальные символы.
Все что нам нужно - просто дописать обратные слеши к каждой кавычке.
*/

/////////

// Иконки, символы UTF-16 \иКОД, UTF-32 \и{КОД}

let text3 = "Study, study, study! \u00A9 \u{1F60D}";
console.log(text3);
/*
Внутрь строки можно добавлять символы UTF-16 & UTF-32.
*/