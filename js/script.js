
// Обработчик событий addEvenetListener/remoteEventListener

// Опции 

const options = {
    "capture": false, // фаза, на которой должен сработать обработчик
    "once": false, // если true, тогла обработчик будет 
    //автоматически удален после выполнения.
    "passive": false // если true, то укаывает, что обработчик 
    // никогда не вызовет preventDefault()
}

const button = document.querySelector('.button');

function showConsole() {
    console.log('KLIK!');
};

button.addEventListener("click", showConsole, options);
// button.addEventListener("click", showConsole, { "capture": false,});
/*
У  метода "addEvenetListener"  есть некоторые параметры.
Синтаксис их записи следуюший: 
после того как мы вызвали функцию, мы ставим запятую и далее пишем параметры.
Мы можем это сделать просто сославшись на обьект с параметрами, либо 
записать параметры непосредственно сюда же. (Так чкрез запятую внутри фигурных
скобок). Кому как удобней.

У обькта "addEventListener" есть три параметра:
"capture" - фаза, на которой должен сработать обработчик
"once": - если true, тогла обработчик будет автоматически удален после выполнения.
    То есть, фактически сразу якобы будет добавлен "remoteEventListener".
    Довольно удобно, не нужно писать отдельный метод обработчика remoteEventListener. 
"passive" - если true, то укаывает, что обработчик никогда не вызовет preventDefault()


*/