// Методы обьекта

// Использование "this"

let userInfo = {
    name: "Alex",
    age: 30,
    address: {
        city: "kharkiv",
        street: "12345",
    },
    // showInfo() {
    //     // console.log(`${userInfo.name}, ${userInfo.age} years. Address: city.${userInfo.address.city}, ул.${userInfo.address.street}`);
    //     console.log(`${this.name}, ${this.age} years. Address: city.${this.address.city}, ул.${this.address.street}`);
    // }
    // пример 2
    showInfo() {
        function show() {
            console.log(`${this.name}, ${this.age} years. Address: city.${this.address.city}, ул.${this.address.street}`);    
        }
        //У стрелочной йункции нет своего "this" используются
        // значение из внешнего метода userInfo.showInfo()
        let show = () => console.log(`${this.name}, ${this.age} years. Address: city.${this.address.city}, ул.${this.address.street}`);

        show();
    }
}
userInfo.showInfo(); 

/*
Дело в том, что словом "this" можно заменить текущий обьект. Например, раньше в примере 
у нас была запись с использованием "userInfo", но теперь вместо "userInfo" мы можем писать 
просто "this" и это и будет подразумевать текущий обьект. Результат тот же.
*/
/*
Из примера 2
Внутри ф-ии "showInfo" создана еще одна ф-ия "show" с тем же исполняемым кодом и ниже эту ф-ию 
вызываем, и мы получаем ошибку, потому что "this" какбы обращается к первому родительскому обьекту.
А сейчас мы создали еще одну дополнительную вложенность и, фактически, "this" сейчас обращается к ф-ии 
"showInfo", а здесь нет никаких name, age и тд, по этомумы получаем ошибку. Причем для стрелочных ф-ий 
нет своего "this".
Переписываем эту ф-ию на стрелочную: в переменную "show" присваиваем ф-ию только уже записанную 
с помощью стрелочного синтаксиса. Остальное все то же самое. Исполняемый код вызывая эту ф-ию и теперь 
у нас никакой ошибки не будет, потому что у стрелочной ф-ии нет своего "this", т.е. этой вложенности 
как-будто не существует и "this" опять использует родительский обьект и у нас все работает.
*/