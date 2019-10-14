let pars = {
    rotateNum: 5,
    turnBody: document.getElementsByTagName('body')[0],
    clickFn: clickFn,
    judgeFn: judgeFn,
};

let lottery = new Lottery(pars);

function clickFn() {
    let num = Math.floor(Math.random() * 360);
    lottery.tableRun(num);
}

function judgeFn(deg) {
    let str = '';
    if (deg < 45 && deg < 270 && deg > 0) {
        //二等奖
        str = '二等奖'
    } else if (deg > 90 && deg < 135 || deg > 270 && deg < 315) {
        //三等奖
        str = '三等奖'
    } else if (deg > 45 && deg < 90 || deg > 135 && deg < 180 || deg > 225 && deg < 270 || deg > 315 && deg < 360) {
        //四等奖
        str = '四等奖'
    } else if (deg > 180 && deg < 225) {
        str = '一等奖'
        //一等奖
    }

    alert('大吉大利 恭喜获得' + str + '!')


}