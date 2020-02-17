let el = document.querySelector('div')
el.removeAttribute('hidden')

let hint = document.getElementById('hint'),
    message = '';


message = 'Чтобы отредактировать текст, нажмите Ctrl + E'
hint.innerHTML += message

document.addEventListener('keydown', function (event) {


    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey) && el == document.querySelector('div')) {
        event.preventDefault()
        message = 'Чтобы сохранить измененный текст, нажмите Ctrl +'
        hint.innerHTML = message

        newEl = document.createElement("textarea");
        newEl.textContent = el.textContent;
        newEl.cols = "40";
        newEl.rows = "15";
        el.replaceWith(newEl);
        el = newEl;

        document.addEventListener('keydown', function (event) {
            if (event.key == '+' && (event.ctrlKey || event.metaKey) && el == document.querySelector('textarea')) {
                message = 'Чтобы отредактировать текст, нажмите Ctrl + E'
                hint.innerHTML = message

                event.preventDefault()
                newEl = document.createElement("div");
                newEl.textContent = el.value;
                el.replaceWith(newEl);
                el = newEl;
            }
        })
    }
})







// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.