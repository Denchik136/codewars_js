var summation = function (num) {
    let summ = 0
    for (let i = 0; i <= num; i++) {
        summ += i;
    }

    return summ;
}

console.log(summation(8))

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m
    }
}

console.log(paperwork(-3, 5))


function countPositivesSumNegatives(input) {
    let count = 0,
        summ = 0;

    if (input != null && !!input.length) {
        input.forEach(e => {
            if (e > 0) {
                count++;
            } else if (e < 0) {
                summ += e
            };
        });
        return [count, summ]
    } else {
        return [];
    }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))