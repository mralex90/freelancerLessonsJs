
// Основы событий мыши

// Наведение мыши: mouseover/out, mouseenter/leave

// События mouseenter и mouseleave

/*
На первый взгляд пара событий mouseenter / mouseleave ничем не отличаются 
от mouseover и mouseout. То же самое - наводим на обьект, выполняется код, 
уходим с обьекта - выполняется другой код. НО! 
Пара важных отличий:
1) Переходы внутри элемента, на его потомки и с них, не считаются.
2) События mouseenter / mouseleave не всплывают.

И тут вроде видим преимущество, так как мы снижаем нагрузку на браузер, у нас 
нет череды повторяющихся событий, нам просто нужно навести на обьект, выполнить 
какие-то действия, когда мы уходим с обьекта - выпоолнить другие действия. А не 
выполнять все постоянно, когда мы внутри обьекта перемещаемся между его потомками 
и т.д.
*/

const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener("mouseenter", function (event) {
    console.log(`Курсор над элементом`);
});

blockForMouse.addEventListener("mouseleave", function (event) {
    console.log(`Курсор уходит с элемента`);  
});
