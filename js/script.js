
// Управление прокруткой страницы 

/*
Вызов elem.scrollIntoView(top) прокручивает страницу, 
чтобы elem оказался вверху. 
Применяется он не к глобальному обьекту window, а к некоему элементу. 

У него усть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена, 
чтобы elem появился в верхней части окна.
Верхний край элемента совмещен с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem 
появился внизу. Нижний край элемента будет совмещен с нижним краем окна.
*/

function setScrollIntoView(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView({
        //"start", "center", "end" или "nearest". По умолчанию "center"
        block: "center",
        // "start", "center", "end" или "nearest". По умолчанию "nearest"
        inline: "nearest", 
        //"auto" или "smooth". По умолчанию "auto"
        behavior: "smooth"
    });
}
// Опции не работают в Safari