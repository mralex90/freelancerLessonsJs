
// Обработчик событий addEvenetListener/remoteEventListener

const button = document.querySelector('.button');

function showConsole() {
    console.log('KLIK!');
};

button.addEventListener("click", showConsole);
// button.removeEventListener("click", showConsole);

/*
Так же как и в предыдущем способемы можем вынести наш код, который мы хотим 
чтобы был выполнен при возникновении события, в отдельную функцию.
Назовем ее  "showConsole" . Теперь обращаясь к нашей кнопке мы навешиваем 
обработчик события "click" и далее пишем просто ия нашей функции, опять же 
без круглых скобок. Результат будет ожидаем - при клике на кнопку будет 
выполнятся нужный нам код.
*/
