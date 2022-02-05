
// Основы событий мыши

// Наведение мыши: mouseover/out, mouseenter/leave

// События mouseover/mouseout, relatedTarget

/*
Эти события являются особенными, потому что у них имеется свойство "relatedTarget". 
Оно "дополняет" Target. Когда мышь переходит с одного элемента на другой, то один 
из них будет Target, а другой relatedTarget.

Для события mouseover:
event.target - это элемент, на который курсор перешел.
event.relatedTarget - это элемент, с которого курсор ушел (relatedTarget -> target).

Для события mouseout наоборот: 
event.target - это элемент, с которого курсор ушел.
event.relatedTarget - это элемент, на который курсор перешел (target -> relatedTarget)
*/

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseover", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});

blockForMouse.addEventListener("mouseout", function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
