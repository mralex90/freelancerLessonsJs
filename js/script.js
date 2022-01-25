
// Метрики элементов на странице 

// Получаем обьект
const block = document.querySelector('.lesson__block');

// Размеры обьекта включающие в себя прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight, scrollWidth u scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);

/*
Опять поговорим о ширине и высоте нашего обьекта, но свойства scrollWidth 
и scrollHeight уже будут включать в себя и ту часть, которую мы не видим за скроллом.
Контент у нас довольно большой, появляется скролл и вот эти свойства вернут полный 
размер. В остальном они работают точьно так же как и clientWidth и clientHeight, 
т.е. не включают в себя ни рамки ни ширину скролла.

Создаем константы, получаем свойства, выводим в консоль. И ширина у нас все та же (443рх), 
так как у нас нет горизонтального скролла, а вот высота уже 470рх (высота всего контента в этом блоке).

*/