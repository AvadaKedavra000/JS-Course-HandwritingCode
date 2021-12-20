/*
语法
    var newArray = arr.flat([depth])
参数
    depth 可选
    指定要提取嵌套数组的结构深度，默认值为 1。
返回值
    一个包含将数组与子数组中所有元素的新数组。
*/
function _flat(arr, depth = 1) {
    //若参数不符合要求，直接返回
    if (!Array.isArray(arr) || depth <= 0) {
        return arr
    }

    return arr.reduce((prev, cur) => {
        //console.log('prev=', prev, 'cur=', cur)
        if (Array.isArray(cur)) { //若当前元素是数组
            return prev.concat(_flat(cur, depth - 1)) //将当前元素数组打平，depth为当前depth-1,再拼接到[上一次回调的返回值]return出去
        } else { //否则将当前元素拼接到[上一次回调的返回值]return出去
            return prev.concat(cur)
        }
    }, []); //reduce的初始值是空数组
}

const arr = [1, 2, [3, 4, [5, 6]]]
console.log(arr)
console.log(_flat(arr))
console.log(_flat(arr, Infinity))