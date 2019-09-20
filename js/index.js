window.onload = function () {
    // 折叠广告
    (function () {
        var banner_btn = document.querySelector('.banner_btn');
        banner_btn.onclick = function () {
            console.log(banner_btn);
            var banner_min = document.querySelector('.banner_min');
            var body = document.body;
            body.removeChild(this.parentNode);
        }
    })();

    // 荣耀专区banner

    // 输入框
    (function () {
        var inp1 = document.querySelector('.ipt input');
        inp1.onfocus = function () {
            inp1.placeholder = '';
        }
        inp1.onblur = function () {
            inp1.placeholder = '                     荣耀9X 荣耀20';
        }
    })();

    // 轮播图
    (function () {
        var lis_Img = document.querySelectorAll('.changeImg>ul>li');
        var yuan = document.querySelector('.yuan');
        var ul = document.querySelector('.changeImg>ul');
        var imgW = document.querySelector('.changeImg').offsetWidth;
        var changeImg = document.querySelector('.changeImg');
        var pIndex = 0;
        // 先动态创建小圆点
        for (var i = 0; i < lis_Img.length; i++) {
            var yuans = document.createElement('span');
            yuans.className = 'spans';
            if (i == 0) {
                yuans.className = 'spans yuan_move';
            }
            yuans.yuans_id = i;
            yuan.appendChild(yuans);
        }
        // 给小圆创建鼠标事件
        setYuan();
        function setYuan() {
            for (var k = 0; k < yuan.children.length; k++) {
                yuan.children[k].onmouseenter = function () {
                    pIndex = this.yuans_id;
                    for (var k = 0; k < yuan.children.length; k++) {
                        yuan.children[k].className = 'spans';
                    }
                    this.className = 'spans yuan_move';
                    animation(ul, ul.offsetLeft, -pIndex * imgW, 10, 20);
                }
            }
        };
        // 给小圆创建图片运动时的状态
        function moveYuan() {
            for (var i = 0; i < yuan.children.length; i++) {
                yuan.children[i].className = 'spans';
            }
            if (pIndex == 6) {
                yuan.children[0].className = 'spans yuan_move';
            } else {
                yuan.children[pIndex].className = 'spans yuan_move';
            }
        }

        //设置定时器，让图片自动轮播
        var new_li = ul.firstElementChild.cloneNode(true);
        ul.appendChild(new_li);
        time_id = setInterval(function () {
            if (pIndex == 6) {
                pIndex = 0;
                ul.style.left = 0 + 'px';
            }
            pIndex++;
            animation(ul, ul.offsetLeft, -pIndex * imgW, 10, 20);
            moveYuan();
        }, 3000);
        changeImg.onmouseenter = function () {
            clearInterval(time_id);
        }
        changeImg.onmouseleave = function () {
            time_id = setInterval(function () {
                if (pIndex == 6) {
                    pIndex = 0;
                    ul.style.left = 0 + 'px';
                }
                pIndex++;
                animation(ul, ul.offsetLeft, -pIndex * imgW, 10, 20);
                moveYuan();
            }, 3000);
        }
        // 封装一个函数，用于记录图片的运动情况
        var timeId = null;
        function animation(element, current, target, step, time) {
            // 始终要保持current值和当前元素的位置相同
            current = element.offsetLeft;
            // 如果id存在
            if (element.timeId) {
                // 说明页面中已经有定时器，立即将该定时器清掉
                clearInterval(element.timeId);
                element.timeId = null; // 可以不写
            }
            element.timeId = setInterval(function () {
                if (current > target) {
                    step = -Math.abs(step);
                }
                if (Math.abs(current - target) >= Math.abs(step)) {
                    current += step;
                } else {
                    clearInterval(element.id);
                }
                if (Math.abs(current - target) <= Math.abs(step)) {
                    current = target;
                    clearInterval(element.id);
                } else {
                    current += step;
                }
                element.style.left = current + 'px';
            }, time)
        }

        // 背景图
        var ul_a = document.querySelectorAll('#ul_img li a');

        for (var i = 0; i < ul_a.length; i++) {
            ul_a[i].onmouseenter = function () {
                this.style.transform = 'translateZ( ' + 200 + 'px)';
                this.style.backgroundColor = 'rgba(0, 0, 0, .1)';
            }
            ul_a[i].onmouseleave = function () {
                this.style.transform = 'translateZ( ' + 0 + 'px)';
                this.style.backgroundColor = 'white';
            }
        }

        var ul_img = document.querySelector('#ul_img');
        // 给右按钮增加点击事件
        var span_right = document.querySelector('.span_right');
        span_right.onclick = function () {
            ul_img.style.left = - 1200 + 'px';
        }
        // 给右按钮增加鼠标移入事件
        span_right.onmouseenter = function () {
            this.style.backgroundColor = '#333';
            this.style.opacity = 0.8;
        }
        // 给右按钮增加鼠标离开事件
        span_right.onmouseleave = function () {
            this.style.backgroundColor = '#ccc';
            this.style.opacity = 1;
        }
        // 给左按钮增加点击事件
        var span_left = document.querySelector('.span_left');
        span_left.onclick = function () {
            ul_img.style.left = 0 + 'px';
        }
        // 给左按钮增加鼠标移入事件
        span_left.onmouseenter = function () {
            this.style.backgroundColor = '#333';
            this.style.opacity = 0.8;
        }
        // 给右按钮增加鼠标离开事件
        span_left.onmouseleave = function () {
            this.style.backgroundColor = '#ccc';
            this.style.opacity = 1;
        }
    })();
    
    
}


