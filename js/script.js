// Планирование setTimeout & setInterval

let result = 0;
function showNumber(num) {
    result += num;
    console.log(result);
    if (result === 5) {
        clearInterval(timeId);
    }
}
let timeId = setInterval(showNumber, 1000, 1);

/*
Точно такая же ситуация существует и для setInterval.
Опять же присваиваем setInterval некой переменной и дальше при 
определенном условии пишем clearInterval и указываем имя переменной.
И все это дело у нас остановится.
*/