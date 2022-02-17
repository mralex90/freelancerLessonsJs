
// Элементы форм 

// Работа с select и option

const mainForm = document.forms.main;
const mainFormSelect = mainForm.nameSelect;

// Добавить новую опцию 
// new Option добавляется через такую конструкцию:
// option = new Option(text, value, defaultDelected, selected);
/*
Параметры:
text - текст внутри <option>, 
value - значение,
defaultSelected - если true, то ставится HTML - атрибут selected,
selected - если true, то элемент <option> будет выбраным.

Тут может быть небольшая путаница с defaultSelected и selected.
Все просто: defaultSelected задает HTML-атрибут, 
его можно получить как option.getAttribute('selected'), 
а selected - выбрано значение или нет, 
именно его важно поставить правильно.
Впрочем, обычно ставят оба этих значения в true или не ставят вовсе(т.е. false).
*/

// Пример:
let newOption = new Option("100", "4", false, false);
mainFormSelect.append(newOption);
/*
В переменную newOption создаем новый обьект "Option".
Текст (1) у него будет "100", значение (2) у него будет "4", и (3) он не будет выбран 
и HTML-атрибута (4) selected у него не будет и он не будет выбран.
В итоге, мы добавляем этот новый обьект в наш select (mainFormSelect).
У нас должен появиться новый обьект option с нужными нам параметрами.
Если мы хотим чтобы этот обьект был выбран, то (3) и (4) меняем на true.
Теперь у нас сразу выбран наш новорожденный option/
*/