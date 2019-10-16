let count = 1;
let container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
}

container.onmousemove = debounce(getUserAction, 1000, true);


//只提供最简单的防抖功能，但是这种情况下this会指向window,所以需要改变this指向
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, wait)
//
//     }
//
// }


//修正this指向问题，使得函数能够正常打印this的值  但此时无法获得正常的event对象
// function debounce(func, wait) {
//     let timeout;
//     return function (e) {
//         let context = this;
//         let args = arguments;  //这里因为是闭包,所以最后取得arguments的时候就是e
//
//         clearTimeout(timeout);
//         timeout = setTimeout(function () {
//             func.apply(context, args)
//         }, wait);
//     }
//
// }


// function debounce(func, wait, immediate) {
//     let timeout;
//     return function (e) {
//         let context = this;
//         let args = arguments;
//         if (timeout) clearTimeout(timeout);
//
//         //这里就是一个难点，利用callNow变量可以将执行函数由末尾提升到之前，就能实现立即执行的效果，同时符合防抖概念。
//         if (immediate) {
//             //如果执行过就不在执行，因为执行过后，在wait时间内就不会将timeout置为空，所以callNow为false,也就不会执行func
//             let callNow = !timeout;
//             timeout = setTimeout(function () {
//                 timeout = null;
//             }, wait);
//             if (callNow) func.apply(func, args);
//         } else {
//             timeout = setTimeout(function () {
//                 func.apply(context, args)
//             }, wait);
//         }
//
//         timeout = setTimeout(function () {
//             func.apply(context, args)
//         }, wait);
//     }
//
// }


//返回值  只在immediate为true的时候执行获得返回值
// function debounce(func, wait, immediate) {
//     let timeout, result;
//     return function (e) {
//         let context = this;
//         let args = arguments;
//         if (timeout) clearTimeout(timeout);
//
//         //这里就是一个难点，利用callNow变量可以将执行函数由末尾提升到之前，就能实现立即执行的效果，同时符合防抖概念。
//         if (immediate) {
//             //如果执行过就不在执行，因为执行过后，在wait时间内就不会将timeout置为空，所以callNow为false,也就不会执行func
//             let callNow = !timeout;
//             timeout = setTimeout(function () {
//                 timeout = null;
//             }, wait);
//             if (callNow) result = func.apply(func, args);
//         } else {
//             timeout = setTimeout(function () {
//                 func.apply(context, args)
//             }, wait);
//         }
//         return result;
//     }
//
// }

//完整版防抖函数
function debounce(func, wait, immediate) {

    let timeout, result;

    let debounced = function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            let callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}