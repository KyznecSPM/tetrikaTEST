import fs from 'fs';

/*
Есть файл с именами (https://yadi.sk/i/97rbNP2ucGoAKw). Нужно выполнить следующие действия и посчитать результат:

1) Отсортировать все имена в лексикографическом порядке
2) Посчитать для каждого имени алфавитную сумму – сумму порядковых номеров букв (MAY: 13 + 1 + 25 = 39)
3) Умножить алфавитную сумму каждого имени на порядковый номер имени в отсортированном списке (индексация начинается с 1). Например, если MAY находится на 63 месте в списке, то результат для него будет 63 * 39 = 2457.
4) Просуммировать произведения из п. 3 по всем именам из файла
*/

// константа для индексации номера буквы
const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// читаем файл
const url = './src/names.txt'
const readfileOfNames = fs.readFileSync(url, 'utf-8');

// преобразуем в массив, убираем все лишнее, сортируем
const nameString = readfileOfNames.split(',').map( name => name.trim())
const re = new RegExp('"', 'g');
const sortNames = nameString.map(el => el.replace(re , '' )).sort();

// алфавитная сумма
const namesSumABC = sortNames.map( name => {
    let result = 0
    for (let i = 0; name.length > i; i+1) {
        const num = ABC.indexOf(name[i].toUpperCase())+1;
        result += num;
    }
    return result;
})

// перемножаем алфовитную сумму и порядковый номер
const indexMultiplier = namesSumABC.map( el => el * (namesSumABC.indexOf(el)+1));

// складываем все значения в массиве
const sum = indexMultiplier.reduce((acc, el) => acc+el, 0);

// выводим результат
console.log(sum);