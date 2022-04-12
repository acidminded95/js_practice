const list = [
    100,
    200,
    300,
    500,
    400,
    400,
    100,
    200,
    500,
    500,
];
const mixed_list = [1, 19, 3, 100, 53];

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
    // The arrow function passed to the .sort() method below  makes it sort numbers in an ascending order.
    list.sort((a,b) => a - b);
    console.log(`List sorted: ${list}`);
    let median;
    if ((list.length % 2) === 0) {
        console.log(`List length is an even number: ${list.length}`);
        const middle = list.length / 2;
        console.log(`The two numbers in the  middle of the list are: ${list[middle-1]} and ${list[middle]}`);
        median = Math.round((list[middle-1] + list[middle]) / 2);
        return median;
    } else {
        console.log(`List length is an odd number: ${list.length}`);
        middle = parseInt(list.length / 2);
        median = list[middle];
        return median;
    }
}

function calcMode(list) {
    const listCount = {};
    list.map((item) => {
        if (listCount[item]) {
            listCount[item] += 1;
        } else {
            listCount[item] = 1;
        }
    });
    console.log(listCount);
    const listCountArray = Object.entries(listCount).sort((a,b) => a[1]-b[1]);
    console.log(listCountArray);
    const mode = parseInt(listCountArray[listCountArray.length-1][0]);
    return mode; 
}