const colSalaries = col.map((person) =>person.salary);

const colSalariesSorted = colSalaries.sort((a,b)=>a-b);

// Helpers

function isEven(num) {
    return (num %2 === 0);
}

function calcMean(list) {
    const list_sum = list.reduce((accumulator=0, new_element)=>(accumulator+new_element));
    const list_mean = list_sum / list.length;
    return list_mean;
}

function calcMedian(list) {
    const middle = parseInt(list.length/2);
    if (isEven(list.length)) {
        const median = (list[middle-1]+list[middle])/2;
        return median;
    } else {
        const median = list[middle];
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
    console.log(listCount)
    const listCountArray = Object.entries(listCount).sort((a,b) => a[1]-b[1]);
    const mode = parseInt(listCountArray[listCountArray.length-1][0]);
    return mode; 
}

function getLast10perc (list) {
    list = list.sort((a,b)=>a-b);
    const tenth = parseInt(list.length/10);
    const last10 = list.slice(-tenth);
    return last10;
}

const colMean = calcMean(colSalariesSorted);
const colMedian = calcMedian(colSalariesSorted);
const colMode = calcMode(colSalariesSorted);

const colSalariesTop10 = getLast10perc(colSalariesSorted);
const top10Mean = calcMean(colSalariesTop10);
const top10Median = calcMedian(colSalariesTop10);
const top10Mode = calcMode(colSalariesTop10);

console.log(`\nOriginal list: ${colSalariesSorted} \nTop 10% list: \n${colSalariesTop10} 
    \n\nOriginal mean: ${colMean} \nTop 10 mean: ${top10Mean}
    \n\nOriginal median: ${colMedian} \nTop 10 median: ${top10Median}
    \n\nOriginal mode: ${colMode} \nTop 10 mode: ${top10Mode}
    \n`);