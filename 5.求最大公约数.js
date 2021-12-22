//辗转相除法
//原理：两个整数的最大公约数等于其中较小的数和两数的差的最大公约数
// function gcd(a, b) {
//     const max = Math.max(a, b)
//     const min = Math.min(a, b)
//     if (a == 0 || b == 0) {
//         return max
//     } else {
//         return gcd(max % min, min)
//     }

// }

//更相减损术
//两个正整数a和b（a>b），它们的最大公约数等于a-b的差值c和较小数b的最大公约数
//比如10和25，25减去10的差是15,那么10和25的最大公约数，等同于10和15的最大公约数。
// function gcd(a, b) {
//     if (a === b) {
//         return a
//     }
//     if (a < b) {
//         return gcd(b - a, a)
//     } else {
//         return gcd(a - b, b)
//     }

// }

//更相减损术优化
function gcd(a, b) {
    if (a === b) {
        return a
    }
    if (a < b) {
        return gcd(b, a)
    } else { //必有a>=b
        //判断奇偶,每遇到偶数就折半，没有遇到偶数再更相减损
        if (!a & 1 && !b & 1) {
            return gcd(a >> 1, b >> 1)
        } else if (!a & 1 && b & 1) {
            return gcd(a >> 1, b)
        } else if (a & 1 && !b & 1) {
            return gcd(a, b >> 1)
        } else {
            return gcd(b, a - b)
        }
    }
}

//最小公倍数
//最小公倍数=两数相乘再除以最大公约数
function lcm(a, b) {
    return a * b / gcd(a, b);
}

console.log(gcd(9, 3))
console.log(lcm(9, 3))