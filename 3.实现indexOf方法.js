function _indexOf(arr, val) {
    if (!Array.isArray(arr)) {
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(_indexOf(arr, 5))