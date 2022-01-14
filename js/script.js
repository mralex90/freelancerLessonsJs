
// DOM

// Атрибуты и свойства DOM-элементов

// Нестандартные атрибуты, dataset

/*
Мы уже использовали произвольные атрибуты, но это рискованно.

Все  атрибуты, начинающиеся с префикса "data-", зарезервированы 
для использования программистами.
Они доступны в качестве dataset
*/

// Получаем элемент
const lessonText = document.querySelector('.lesson__text');

// Получаем  data-атрибут
console.log(lessonText.dataset.size);
// Перезаписываем  data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

/*
Если бы у нас имя data-атрибута состояло из 2х и больше слов, то 
в ДЖС стоило бы указывать имя в стиле lowerCamelCase/
*/