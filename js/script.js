
// Свойства и методы форм

// Разница между document.forms и document.querySelectorAll('form');

// Коллекция
console.log(document.querySelectorAll('form'));
// Живая коллекция
console.log(document.forms);

// Добавление новой формы
document.body.insertAdjacentHTML(
    "beforeend",
    `<form name="some" class="some-form" action="#"></form>`
);
/*
Есть еще один метод получения списков всех форм на странице - с помощью querySelectorAll.
И в качестве селектора мы указываем тег form. 
Все бы ничего, но есть сущственная разница между querySelectorAll и document.forms.
Дело в том, что это обе коллекции, но document.forms - является живой коллекцией.
О чем идет речь? 
Оба метода выводим в консоль и оба возвращают список текущих форм на странице.
Но! Позже мы возьмем и добавим, с помощью ДЖС insertAdjacentHTML еще одну форму на 
нашу страницу. Что произойдет? Вывод с помощью querySelectorAll вернет нам ту же одну форму, 
что и до этого, а вот живая коллекция  document.forms - вернет уже две формы, та что была и та что 
добавлена динамически.

Так что из-за того, что document.forms является живой коллекцией, то пользоваться стоит 
именно этим методом.
*/