$(function () {
    // tab栏切换
    var tab_lis = $('.tab_title ul li');
    $.each(tab_lis, function (index, ele) {
        $(ele).on('mouseenter', function () {
            $('.VMall_bot').eq(index).stop().slideDown(500);
        }).on('mouseleave', function () {
            $('.VMall_bot').eq(index).stop().slideUp(500);
        });
    });
    $('.VMall_bot').on('mouseenter', function () {
        $(this).stop().slideDown(500);
    }).on('mouseleave', function () {
        $(this).stop().slideUp(500);
    });
    // 轮播广告 
    var count = 0;
    var timeId = setInterval(function () {
        count++;
        var li = $('.banner_img ul li');
        $.each(li, function (index, ele) {
            $(ele).stop().fadeToggle();
        });
        if (count % 2 == 1) {
            $('.bannerImg_bot span:nth-child(2)').addClass('style_span');
            $('.bannerImg_bot span:nth-child(1)').removeClass('style_span');
        } else {
            $('.bannerImg_bot span:nth-child(1)').addClass('style_span');
            $('.bannerImg_bot span:nth-child(2)').removeClass('style_span');
        }
    }, 1500);
    $('.banner_img').mouseenter(function () {
        clearInterval(timeId);
    });
    $('.banner_img').mouseleave(function () {
        timeId = setInterval(function () {
            count++;
            var li = $('.banner_img ul li');
            $.each(li, function (index, ele) {
                $(ele).stop().fadeToggle();
            });
            if (count % 2 == 1) {
                $('.bannerImg_bot span:nth-child(2)').addClass('style_span');
                $('.bannerImg_bot span:nth-child(1)').removeClass('style_span');
            } else {
                $('.bannerImg_bot span:nth-child(1)').addClass('style_span');
                $('.bannerImg_bot span:nth-child(2)').removeClass('style_span');
            }
        }, 1500);
    });
    var span = $('.bannerImg_bot span');
    // 遍历span
    function span1() {
        $.each(span, function (index, ele) {
            $(ele).hover(function () {
                // clearInterval(timeId);
                $(this).addClass('style_span').siblings().removeClass('style_span');
                $(this).parent().siblings().children().eq(index).stop().fadeIn().siblings().stop().fadeOut();
            });
        });
    };
    span1();

    // 家居生态
    var li = $('.content ul li');
    $.each(li, function (index, ele) {
        $(ele).hover(function () {
            $(this).find('img').css('transform', 'scale(1.2)');
            $(this).find('.word').css('background', 'grey').siblings().css('background', '');
            $(this).find('p:nth-child(1)').css('color', 'white').siblings().css('color', '');
        });
        $(ele).mouseleave(function () {
            $(this).find('img').css('transform', 'scale(1)');
            $(this).find('.word').css('background', '');
            $(this).find('p:nth-child(1)').css('color', '');
        })
    })

    // 翻牌抽奖
    var timeId2 = null;
    $('.ac').one('click', function () {
        $('.face img').animate({
            opacity: 1,
        }, 0);

        $('.reword_left .item').css({
            animationName: 'items',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(1)').css({
            animationName: 'items1',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(2)').css({
            animationName: 'items2',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(3)').css({
            animationName: 'items3',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(4)').css({
            animationName: 'items4',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(6)').css({
            animationName: 'items6',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(7)').css({
            animationName: 'items7',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(8)').css({
            animationName: 'items8',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        $('.reword_left .item:nth-child(9)').css({
            animationName: 'items9',
            animationDuration: 2 + 's',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate'
        });
        timeId2 = setTimeout(function () {
            var num = Math.floor(Math.random() * 9);
            if (num === 4) {
                alert('很遗憾，您没有中奖');
            } else {
                $('.reword_left .item .face img').eq(num).css('opacity', 0);
            }
        }, 4000);

    });

    // $('.reword_left').on('click' , '.item .face img', function() {
    //     $(this).css('opacity', 0);  
    // });


    var time_id = setInterval(function () {
        $('.names_content ul').stop().slideToggle(2000);
    }, 2000);
    $('.names_content ul').mouseenter(function () {
        clearInterval(time_id);
    });
    $('.names_content ul').mouseleave(function () {
        time_id = setInterval(function () {
            $('.names_content ul').stop().slideToggle(2000);
        }, 2000);
    });

    showDiv();
    function showDiv() {
        // 页面滚动出去一段距离，让电梯导航显示
        // 获取卷起距离
        var topVal = $(document).scrollTop();

        // 判断
        if (topVal >= $('.juan').offset().top) {
            // 让盒子显示
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    // 添加滚动事件，加给window
    $(window).scroll(function () {
        showDiv();
        // 滚动的过程中，如果 到大某个div就要让对应的li显示效果
        // 知道当前这个盒子的索引值，如果索引值找到li
        // 卷起距离和每一个盒子到顶部距离比较，如果超过顶部的距离，说明到大这个盒子，
        // 此时就得让对应的li显示样式
        var top = $(document).scrollTop();
        $('.floor>div').each(function (i, elm) {
            // 让top和每个盒子顶部比较
            if (top >= $(elm).offset().top) {
                $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
            }
        });
    });

    // 点击电梯导航，页面到指定的位置
    $('.fixedtool li').click(function () {

        // 我们得知道要到哪个盒子，
        // 求出这个盒子距离文档顶部的位置
        // 把scrollTop设置成这个位置，那么这个效果就实现
        // 1、点击li要知道这个li的索引值
        var index = $(this).index();
        // 2、找到对应的div及到顶部的位置
        var topZhi = $('.floor>div').eq(index).offset().top;
        // 3、修改卷起距离
        // $(document).scrollTop(topZhi);
        // 动画要加给元素
        $('body,html').animate({
            scrollTop: topZhi
        }, function () {
            $(this).addClass('current').siblings().removeClass('current');
        });
    });



});