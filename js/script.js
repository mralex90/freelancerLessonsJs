
// События форм и элементов

// События cut, copy, paste
//Эти событтия происходят при вырезании/копировании/вставке данных.

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener("copy", function (event) {
    console.log(`Копируем`);
});
mainFormInput.addEventListener("paste", function (event) {
    console.log(`Вставляем`);
});
mainFormInput.addEventListener("cut", function (event) {
    console.log(`Вырезаем`);
});


/*
Пример:
input получаем в константу и вешем на него сразу три обработчика на  
события - копировать, вставить и вырезать. И при возникновении каждого 
выводим соответстующую строку в консоль.
Проверяем. Пишем в поле некое слово и попробуем скопировать его, копируем, 
и в этот момент срабатывает обработчик, и мы получаем в консоли уведомление.
Теперь пытаемся вставить, нажимаем вставить и получаем уже результат работы 
следующего обработчика.
Осталось попробовать вырезать. Вырезаем, и опять обработчик отлично сработал.
*/
///////////////
/*
Более того, любое из этих действий мы можем отменить с помощью уже знакомого 
нам "event.preventDefault". 

mainFormInput.addEventListener("paste", function (event) {
    console.log(`Нельзя вставить`);
    event.preventDefault();
});

*/
