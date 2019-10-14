(function (window) {
    let defaultPar = {
        rotateNum: 5,
        turnBody: document.getElementsByTagName('body')[0],
        clickFn: function () {
        },
        judgeFn: function () {
        }
    };

    function Lottery(pars) {

        this.pars = Object.assign(defaultPar, pars);   //合并，容错处理
        this.bool = true;
        this.init();
    }

    window.Lottery = Lottery;
    Lottery.prototype.init = function () {
        let self = this;
        this.pars.btn = this.pars.turnBody.getElementsByClassName('btn')[0];
        this.pars.bigWheel = this.pars.turnBody.getElementsByClassName('pan')[0];
        this.pars.btn.onclick = function () {

            if (self.bool) {
                self.bool = false;
                self.pars.clickFn()
            }

        };

        this.pars.bigWheel.addEventListener('webkitTransitionEnd', function () {
            console.log('over');
            self.bool = true;
            self.pars.bigWheel.style.transform = `rotate(${self.pars.myNum}deg)`;
            self.pars.bigWheel.style.transition = 'none';
            self.pars.judgeFn(self.pars.myNum)
        })
    };


    Lottery.prototype.tableRun = function (deg) {
        let myNum = deg + this.pars.rotateNum * 360;
        this.pars.bigWheel.style.transform = `rotate(${myNum}deg)`;
        this.pars.bigWheel.style.transition = 'all 4s';
        this.pars.myNum = deg;
    };
})(window);

