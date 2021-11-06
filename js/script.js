// Условный оператор "?"
let message = "Hello";
let messageEnd;

// if (5 > 1) {
//     messageEnd = ", Vasya!";
// } else { 
//     messageEnd = ", Anna!";
// } С ПОМОЩЬЮ "?" МОЖНО ПЕРЕПИСАТЬ ЭТО КЛАСИЧЕСКОЕ УСЛОВНОЕ ВЕТВЛЕНИЕ

// let messageEnd = (5 > 1) ? ", Vasya!" : ", Anna!";

/*
если 5 больше 1, (далее идет условн оператор ?) тогда присваиваем первое значение. 
Дальше идет ":" - это заменяет else, и  если условие не выполняется, то присваивается второе значение.
Причем скобки мы может убрать, т.к. условный оператор ? имеет
очень низкий приоритет и сначала выполнится условие, а уже потом условный оператор.
Оператор ? является тернарным - это единственный оператор у которых целых три операнда.
*/

// message += messageEnd;
// console.log(message);

if (5 > 50) {
    messageEnd = ", Aleks!";
} else if (5 > 30) {
    messageEnd = ", Bob";
} else if (5 > 10) {
    messageEnd = ", John!";
} else if (5 > 1) {
    messageEnd = ", Maria!";
}else {
    messageEnd = ", Anna!";
}

messageEnd = 5 > 10 ? ", Alex!" : 
    5 > 30 ? ", Bob" : 
    5 > 10 ? ", John!" : 
    5 > 1 ? ", Maria!" : ", Anna!"
/*
Такая реализация менее читабельна чем классическая,
поэтому советуют использовать все таки классическую реализацию.
*/
message += messageEnd;
console.log(message);


/*
По этой причине не стоит использовать условный оператор как полный заменитель IF.
Например воот здесь:
*/
 5 > 10 ? console.log("Hello, Vasya!") : console.log("Hello, Anna!");

 if (5 > 10) {
     console.log("Hello, Vasya!");
 } else {
     console.log("Hello, Anna!");
 }
 /*
 в итоге условный оператор ? стоит применять тогда, когда 
 нам нужно вернуть то либо иное значение, как в этом примере.
 Такая запись понятна и легко читается.
 Во всех остальных случаях стоит использовать 
 класический IF и если нужно ELSE/ELSEIF
 */
let message1 = 5 > 10 ? "Hello, Oleks!" : "Hello, Anna!";
console.log(message1);