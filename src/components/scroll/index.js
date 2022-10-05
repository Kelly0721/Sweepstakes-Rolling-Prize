import Taro from "@tarojs/taro";

var Scroll = function ({
        eleID,
        scrollID,
        targetID = null,
        pageSize = 10,
        field = 'id',
        duration = 5,
        itemId,
    }) {
        this._targetElement = null;
        this._element = document.getElementById(eleID);
        this._scrollElement = document.getElementById(scrollID);
        this.scrollID = scrollID;
        this.itemId= itemId;
    
        if (targetID) this._targetElement = document.getElementById(targetID);
        this._size = pageSize;
        this._len = 0;
        this._ids = {};
        this._field = field;
        this._duration = duration;
        this._itemWidth = 0;
        this._itemHeight = 213;
        this.init();
        return this;
    }
Scroll.prototype.init = function () {
    // if (this._targetElement) {
    //     this._targetElement.style.position = 'absolute';
    //     this._targetElement.style['z-index'] = 100000;
    // }
    this._scrollElement.style['will-change'] = 'transform';
    this._scrollElement.style.position = 'absolute';
    this._scrollElement.style.transform = 'translateY(0%)';
    this._scrollElement.style['z-index'] = 9999;

    // this._scrollElement.style['-webkit-transition'] = transition;
    // this._scrollElement.style['-moz-transition'] = transition;
    // this._scrollElement.style['-ms-transition'] = transition;
    // this._scrollElement.style['-o-transition'] = transition;
    // this._scrollElement.style['transition'] = transition;
    // console.log(this._scrollElement.children)
    // this._createNoneElement && this._createNoneElement();

    let list = Array.from(this._scrollElement.children);
    this._len = list.length;
    // this._itemHeight = this._scrollElement.children[0].clientHeight;

    Taro.createSelectorQuery().selectAll(`.${this.itemId}`).boundingClientRect(function(rect){
        this._itemHeight = rect[0].height
        console.log(this._itemHeight)
      }).exec()

    list.forEach((item, index) => {
        this._ids[item.dataset[this._field]] = index;
    })
    // for (var i = 0; i < this._size; i++) {
    //     this._scrollElement.innerHTML += this._scrollElement.innerHTML;
    // }
}

Scroll.prototype._createNoneElement = function () {
    let child = document.createElement(this._scrollElement.children[0].tagName);
    child.classList.value = this._scrollElement.children[0].classList.value;
    Array.from(this._scrollElement.children[0].style).forEach((item, index) => {
        child.style[item] = this._scrollElement.children[0].style[item]
    })
    child.innerHTML = '<div class="content-img" style="display: flex;justify-content: center;align-items: center;">很遗憾<br/>你今天不能吃饭</div>';
    this._scrollElement.append(child);
}

Scroll.prototype.start = function (winId) {
    let n = this._ids[winId] ? this._ids[winId] : this._ids[undefined],
    // x = ((this._size - 1) * this._len + Number(n)) * this._itemWidth;
    // if (this._targetElement) {
    //     x = x - (this._targetElement.offsetLeft + this._targetElement.clientWidth / 2) + this._itemWidth / 2;
    // }
    // console.log('winId=' + winId, 'x=' + x);
    // this._scrollElement.style.transform = 'translateX(0%)';
    // this._scrollElement.style['transition-duration'] = '0ms';
    // let handle = setTimeout(() => {
    // this._scrollElement.style['transition-duration'] = this._duration + 's';
    // this._scrollElement.style.transform = 'translateX(-' + x + 'px)';
    //     clearTimeout(handle);
    // })
    y =((this._size - 1) * this._len + Number(n)) * this._itemHeight;
    this._scrollElement.style.transform = 'translateY(0%)';
    // this._scrollElement.style.transform = [{translateY: 0}];;
    this._scrollElement.style['transition-duration'] = '0ms';
    this._scrollElement.style.duration = '0ms';

        // let animation = Taro.createAnimation({
        //     // 动画持续时间
        //     duration:500,
        //     // 定义动画效果，当前是匀速
        //     timingFunction :' linear'
        //   })
        // this._scrollElement.animation = animation;
        // animation.translateY(0).step()
        
    let handle = setTimeout(() => {
        this._scrollElement.style['transition-duration'] = this._duration + 's';
        this._scrollElement.style.transform = 'translateY(-' + y + 'px)';
        this._scrollElement.style.duration = this._duration + 's';
        console.log(this._duration)
        // this._scrollElement.style.transform = [{translateY: `-${y}`}];
        // animation.translateY(-y).step()
        clearTimeout(handle);
    })
}

export default Scroll