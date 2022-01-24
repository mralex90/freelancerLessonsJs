
// Метрики элементов на странице 

// Получаем обьект
const block = document.querySelector('.lesson__block');

// Общие размеры обьекта
// offsetWith и offsetHeight

// Получаем размеры обьекта 
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

// Метрики для не показываемых элементов равны нулю.
/*
Теперь научимся получать общие размеры обьекта - его ширину и высоту.
Сделать это мы модем с помощью соответствующих свойств - offsetWith 
и offsetHeight.
Создаем две константы, обращаемся к нащему блоку и также пищем соответствующие 
свойство offsetWith и offsetHeight, выводим в консоль.
Мы видим два значения - 500рх и 300рх. Именно эти значения мы видели у 
свойств CSS widht u height (при box-sizing:border-box).
Что включают в себя эти значения? Они включают в себя и рамку "border", 
и внутренний отступ padding, и полосу прокрутки... Одним словом, это общие 
длинна и высота нашего обьекта.

Стоит добавить, что если скрить обьект, например, через display:none, то 
offsetWith и offsetHeight вернут нули.
*/
