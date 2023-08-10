$(function() {
    $('#yes').click(function(event) {
        modal('我的乖宝宝，现在你是我丁金锁的第一夫人了，嘿嘿！！哥哥爱你永远永远哦(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('宝贝不乖哦，哥哥会打宝贝屁屁的哎，不过不疼哈哈，哥哥舍不得哈哈', A);
    });
});

function A() {
    modal('哥哥多喜欢多爱我的宝贝老婆呀！反正是没办法用言语表达的热爱与喜欢。好吧，我就是语文差哈哈', B);
}

function B() {
    modal('哥哥知道宝贝老婆肯定只是调皮一下，哥哥懂你的哈哈哈，宝贝是一直倔强又骄傲的小狮子！', C);
}

function C() {
    modal('宝贝可不能拒绝我哦，哥哥为了能让宝贝老婆开心，好辛苦花了好多时间做这些哎', D);
}

function D() {
    modal('拒绝我，不存在的，熬了多少个夜才做出来，宝贝老婆可不能浪费哥哥的心血和感情', E);
}

function E() {
    modal('跟着哥哥走吧宝贝老婆，哥哥给你糖吃哦', F);
}

function F() {
    modal('真想宝贝老婆这辈子都不要离开我，只要能有宝贝老婆陪在身边，哥哥捡垃圾，扫马路啥的都愿意呜呜呜！', G);
}

function G() {
    modal('哥哥想每天都配宝贝一日三餐，一年四季，一次轮回，满眼是你，满脸爱意！哥哥都只独宠我的宝贝老婆！', H);
}

function H() {
    modal('哥哥想每天都做饭给宝贝吃，给宝贝洗澡洗头洗脚，拥宝贝入怀，与宝贝去很多地方看日出日落。日复一日，年复一年，永永远远的都爱着我的宝贝老婆！', I);
}

function I() {
    modal('哥哥从前就一直坚信会遇到一个如彩虹般绚丽的人，未曾想那个人就是我宝贝老婆，你是那么绚丽多彩，让我感觉周围的人都黯然失色！我爱你，深深的爱着你我的爱人，mua！', J)
}

function J() {
    modal('宝贝老婆，真想有一天我能把9块9花出去，让我牵着宝贝的手去民政局登记哈哈哈。哎，写到这，我要哭了呜呜呜，不写了哈我宝贝老婆，纸短情长，还道爱你万千！', function() {
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
