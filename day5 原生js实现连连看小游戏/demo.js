window.onload = function () {
    init();
};

var rows = 7;
var cols = 12;
var wrap;
var types = 20;
var squareSet;
var chooseOne;

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

    var tempArr = createRandomNumber();
    squareSet = new Array(rows + 2);
    for (var i = 0; i < squareSet.length; i++) {
        squareSet[i] = new Array(cols + 2)
    }
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= cols; j++) {
            var temp = createSquare(tempArr.pop(), i, j);
            squareSet[i][j] = temp;
            wrap.append(temp);
            temp.onclick=function(){
                if(chooseOne==null||chooseOne.num!=this.num){
                    chooseOne=this;
                }else{

                }
            }
        }

    }
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
    });
    return temp
}

function createSquare(num, row, col) {
    var temp = document.createElement(('div'));
    temp.classList.add('square');
    temp.style.backgroundImage = "url('./img/" + num + ".png')";
    temp.style.left = 86 * col + 'px';
    temp.style.top = 76 * row + 'px'
    temp.num = num;
    temp.row = row;
    temp.col = col;
    return temp;
}
