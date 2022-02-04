
// Основы событий мыши

// Координаты: clientX/Y, pageX/Y

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mousemove", function (event) {
    blockForMouse.innerHTML = 
        `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});

/*
Движения мыши.
Разберем событие "mousemove" - оно вызывается при каждом движении мыши над 
определенным элементом.
В примере есть поле для теста, его передали в константу и на него навесили 
событие "mousemove" и что нужно сделать? - Нужно прям в него, вот в это поле 
вывести координаты нашего курсора относительно окна браузера.
Для этого используем clientX и clientY, опять же из обьекта события.

Такое часто использется, например , при паралаксе
*/