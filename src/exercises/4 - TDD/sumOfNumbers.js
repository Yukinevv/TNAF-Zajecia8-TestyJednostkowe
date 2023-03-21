//export const sumOfNumbers = null;

export const sumOfNumbers2 = (arr) => {
    if (!Array.isArray(arr)) return 0;
    if (arr.length == 0) return 0;

    let sum = 0;
    /*arr.forEach(element => {
        sum += element;
    });*/
    sum = arr.reduce((acc, currVal) => acc + currVal, 0);
    return sum;
}

export const sumOfNumbers = (arr) => (Array.isArray(arr)) ? arr.reduce((acc, currVal) => acc + currVal, 0) : 0;
