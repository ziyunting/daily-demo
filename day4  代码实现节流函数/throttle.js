//利用时间戳来完成节流
// function throttle(func,wait) {
//     let arg, self;
//     let precious = 0;
//
//
//     return function () {
//         self = this;
//         arg = arguments;
//         let now = +new Date();
//         if(now-precious>wait){
//             func.apply(self,arg)
//         }
//     }
// }

//利用定时器完成节流函数
function theottle(func,wait) {
    let arg,self;
    let timeout=null;

    return function(){
        self=this;
        arg=arguments;

        if(!timeout){
            timeout=setTimeout(function(){
                timeout=null;
                func.apply(self,arg);
            },wait)
        }
    }
}