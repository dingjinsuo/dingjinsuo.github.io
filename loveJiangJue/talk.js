$(function() {
    $('#yes').click(function(event) {
        modal('我的乖宝宝，金锁的第一夫人，嘿嘿！！情人节快乐！！爱你永远永远哦(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('宝贝不乖哦，会打珏珏宝宝屁屁的哎，不过不疼哈哈，舍不得哈哈', A);
    });
});

function A() {
    modal('多喜欢多爱我的宝宝珏珏呀！反正是没办法用言语表达的热爱与喜欢。好吧，我就是语文差哈哈', B);
}

function B() {
    modal('知道宝宝老婆肯定只是调皮一下，懂你的哈哈哈！', C);
}

function C() {
    modal('宝宝珏珏可不能拒绝我哦，为了能让宝宝珏珏开心，好辛苦花了好多时间做这些哎', D);
}

function D() {
    modal('不要拒绝嘛，我还给宝宝珏珏放烟花，只要宝贝开心！', E);
}

function E() {
    modal('跟着走吧，给你糖吃哦，还能公主抱宝贝老婆，所以得多喝水，不然跟着走不动喽怎么办', F);
}

function F() {
    modal('情人节快乐，我的珏珏宝宝', function() {
        fireworks();
    });
}

function G() {
    modal('如果可以的话，想每天都陪珏珏宝宝一日三餐，一年四季，一次轮回，满眼是你，满脸爱意！都只独宠我的宝贝珏珏宝宝老婆！', H);
}

function J() {
    modal('我的最重要的宝贝珏珏老婆啊。嘿嘿，纸短情长，还道爱你万千！希望', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
