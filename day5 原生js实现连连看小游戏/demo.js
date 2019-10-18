window.onload = function () {
    init();
};

var rows = 7;
var cols = 12;
var wrap;
var types = 20;

function init() {
    wrap = document.getElementById('wrap');
    if (rows * cols % 2 != 0) {
        alert('展示数量不能为奇数！')
    }
    initSquareSet();


}

function initSquareSet() {
    wrap.style.width = 86 * cols + 'px';
    wrap.style.height = 76 * rows + 'px';

    var temp = createRandomNumber();
    // createSquare();
}

//
function createRandomNumber() {
    var temp = [];
    for (var i = 0; i < rows * cols / 2; i++) {
        var num = Math.floor(Math.random() * types);
        temp.push(num);
        temp.push(num);
    }
    console.log(temp);
    temp.sort(function () {
        return Math.random() - 0.5;
    })
    return temp
}

function createSquare() {

}
