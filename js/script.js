
// Основы событий мыши

// Наведение мыши: mouseover/out, mouseenter/leave

// События mouseover/mouseout, relatedTarget
/*
Событие "mouseover" происходит в момент, когда курсор оказывается нал элементом, 
а событие mouseout - в момент, когда курсор уходит с элемента.
*/

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
    blockForMouse.innerHTML = `Курсор над элементом`;
});

blockForMouse.addEventListener("mouseout", function (event) {
    blockForMouse.innerHTML = `Курсор уходит с элемента`;
});
/*
Событие "mouseover" происходит в момент, когда курсор оказывается над обьектом, а 
"mouseout" - когда курсор уходит с этого обьекта.
*/
