function filterBy(arr, type) {
    let newArr = [];
    for (let i = 0; i< arr.length; i++) {
        if (typeof(arr[i]) !== type) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
