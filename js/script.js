// Изменение значений
let arr = ['Alex', 'Ivan', 'Olya',];

// Меняем существующее
arr[0] = 'Oleks';
console.log(arr);

// Добавляем новое
arr[3] = 'Aleks';
console.log(arr);
/*
Чтобы изменить наш массив из трех элементов и обращаемся к первому из них по нулевому ключу, 
и присваиваем совсем другую строку. Выводим в консоль и увидим что значения поменялись.
Если нужно добавить новое значение, то для этого нужно обратиться по несуществующему ключу.
В итоге наш массив уже состоит из 4х элементов.
*/