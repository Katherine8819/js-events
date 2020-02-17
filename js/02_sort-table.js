document.getElementById('table').removeAttribute('hidden')

function sortTable(columnNumber) {
    let row, i, shouldSwitch,
        switchCount = 0,
        dir = "asc",
        switching = true;

    let table = document.getElementById('table');

    while (switching) {
        switching = false

        row = table.getElementsByTagName('TR')
        for (i = 1; i < row.length - 1; i++) {
            let a = row[i].getElementsByTagName('TD')[columnNumber]
            let b = row[i + 1].getElementsByTagName('TD')[columnNumber]

            shouldSwitch = false;

            if (dir == "asc") {
                if (isNaN(Number(a.innerHTML))) {
                    if (a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(a.innerHTML) > Number(b.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (isNaN(Number(a.innerHTML))) {
                    if (a.innerHTML.toLowerCase() < b.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(a.innerHTML) < Number(b.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            row[i].parentNode.insertBefore(row[i + 1], row[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.