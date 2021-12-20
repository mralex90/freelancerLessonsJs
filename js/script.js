
//  Что такое BOM?

/*
Обьектная Модель Браузера - ВОМ, дополнительные обьекты предоставляемые браузером для 
того, чтобы работать со всем, кроме документов. 

Например с помощью обьекта "navigator" мы можем получать информацию о браузере и операционной 
системе
*/
// Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Mozilla")) {
    console.log('MOZILLA browser');
} else if (navigator.userAgent.includes("Firefox")) {
    console.log('Browser Firefox');
}

// Платформа
console.log(navigator.platform);


////// Location
/*
С помощью "location" мы можем получить текущий адрес страницы, URL страницы, либо перенаправить 
пользователя на свой адресс
*/

// Получаем URL
console.log(loction.href);
// Меняем URL
// location.href = "https://google.com";

/////// History

// Обьект history позволяет управлять историей браузера, передвигаться по посещенным ранее страницам.

history.back();
history.forward();