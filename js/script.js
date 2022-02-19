
// События форм и их элементов

// Фокусировка на любом элементе с помощью tabindex

const lesson = document.querySelector('.lesson');

// Реагируем на событие "в фокусе"
lesson.addEventListener("focus", function (e) {
    lesson.classList.add('_focus');
    console.log('Div lesson in focus!');
});
// Реагируем на событие "потеря фокуса"
lesson.addEventListener("blur", function (e) {
    lesson.classList.remove('_focus');
});
/*
В константу lesson добавляем обьект с классом lesson. Этот обьект обычный див, 
и никакая фокусировка по-умолчанию на нем не действует и весь этот код 
работать не будет. Но, если нашему ДИВу добавить атрибут "tabindex" со значением 
"-1" и посмотрим что будет. Кликаем на обьект и видим, что класс добавился, так 
как у нас появилась рамка и именно это прописано в CSS. Далее кликаем еще куда-нибудь, 
фокус пропадает, соответственно, пропадант класс и рамка. Все работает.
*/

///////

// Текущий элементс фокусом можно получить из document.activeElement.
console.log(document.activeElement);