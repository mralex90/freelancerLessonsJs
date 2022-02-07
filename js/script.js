
// Клавиатура

/*
Основные события при работе с клавиатурой это:
    keydown - происходит при нажатии клавиши
    keyup - при отсутствии клавиши

Так же нам очень помогут детали нашего обьекта события "event" - "code" и "key". 
*/

// event.code и event.key

/*
Если пользователь работает с разными языками, то при переключении на другой язык 
символ изменится с "А" на совершенно другой. Получившееся станет новым значением "event.key", 
тогда как "event.code" останется тем же : "KeyA".
*/

document.addEventListener("keydown", function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
});

document.addEventListener("keyup", function (event) {
    console.log(`Отжата клавиша ${event.code} (${event.key})`);
});


