
// Прокрутка (события прии скролле)

window.addEventListener('scroll', function (event) {
    // кол-во прокрученных пикселей по вертикали
    //scrollY или pageYOffset (устарел)
    //кол-во прокрученных пикселей по горизонтали
    //scrollX или pageXOffset (устарел)

    console.log(`${scrollY}px`);
});

/*
Событие скролл возникает когда мы прокручиваем некий обьект либо все окно браузера.
Пример:
Глобальный обьект window, навешиваем событие скролл и в консоль выводим 
количество прокрученных пикселей, для этого существуют такие специальные свойства 
scrollY или scrollX, горизонтальный и вертикальный скролл соответственно.
*/