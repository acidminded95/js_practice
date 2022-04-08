const list = [
    100,
    200,
    300,
    500,
    400,
    400,
    100,
    200,
];

// Using a for cycle

function calcMean(list) {
    let list_sum = 0;
    for (let i=0; i < list.length; i++) {
        list_sum = list_sum + list[i]
    }
    const list_mean = list_sum / list.length;
    return list_mean;
}

// Using .reduce() method

function calcMean2(list) {
    const list_sum = list.reduce(
        function (accumulated_value = 0, new_element) {
            return accumulated_value + new_element;
        }
    );

    const list_mean = list_sum / list.length;
    return list_mean;
}

function calcMedian(list) {
    let median;
    if ((list.length % 2) === 0) {
        asd
    }
}