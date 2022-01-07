
// DOM
// Изменение документа

// Mетоды вставки

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Learn JS <span class="yellow">React</span>!`;

// Вставка нескольких фрагментов сразу
textElement.append(newElement, "Hello!");

/*
// Можно вставлять строку
textElement.append(`Learn JS <span class="yellow">React</span>!`);
*/
/*
Другими словами, строки вставляются безопасным способом, как это 
делает textContent. Поэтому эти методы могут использоваться только 
для вставки ДОМ-узлов или текстовых фрагментов. А чтоЮ если мы хотим 
вставить ХТМЛ именно "как ХТМЛ", со всемитегами и прочим, как это делает innerHTML?
*/