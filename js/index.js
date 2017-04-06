/**
 * Created by cnnic on 2017/3/24.
 */
//function XingZuo (data, num) {
//    //数据传递，绑定
//    this.data = data;
//    //星座编号
//    this.num = num;
//    // jQuery如何动态生成？addClass如何添加多个类名？还有回调函数形式；星座容器
//    this.dom = $('<div></div>').addClass('item num-' + this.num);
//    //config统一保存对象中使用的临时变量
//    this.config = {
//        //xing_zuo_container: $$.$id('myXingzuo')
//    }
//    //执行init()函数
//    this.init();
//}
//
//XingZuo.prototype = {
//    init: function () {
//        this.bindDom();
//        this.bindEvents();
//    },
//    bindDom: function () {
//        var str = '';
//        str += '<div class="image"></div>';
//        str += '<div class="description">';
//            str += '<p class="name">{{name}}</p>';
//            str += '<p class="time">{{time}}</p>';
//        str += '<div class="mark"></div>';
//        str += '</div>';
//
//        //报错、排错
//        // console.log($$.artTemplate(str, this.data))
//        // console.log(this.dom);
//
//        //使用artTemplate模板
//        this.dom.html($$.artTemplate(str, this.data)).appendTo($('#myXingzuo'));
//    },
//    bindEvents: function () {
//        this.dom.on('click', function () {
//            // DOM对象
//            // console.log(this);
//            //当第二次点击的时候，是没法去掉selected类名的；DOM转jQuery
//            //$(this).addClass('selected');
//            //不用考虑排它思想，只管自己点击时候触发什么操作
//            //DOM转jQuery
//            $(this).toggleClass('selected');
//
//            //这里可以在外面定义
//            //var that = this;
//            //that.dom.toggleClass('selected');
//        }).on('mouseenter', function () {
//            // console.log('父盒子mouseover，进入子盒子也管用，看次数');
//            // console.log('父盒子mouseenter，进入子盒子不管用，看次数');
//            $(this).addClass('is-hover');
//        }).on('mouseleave', function () {
//            // console.log('使用mouseenter和mouseleave对');
//            $(this).removeClass('is-hover');
//        });
//    }
//}

//simple模板实现了上面的双对象；使用方法如下：var XingZuo = Class.extend({之前的});
var XingZuo = Class.extend({
    //曾经的构造函数
    init: function (data, num) {
        //数据传递，绑定
        this.data = data;
        //星座编号
        this.num = num;
        // jQuery如何动态生成？addClass如何添加多个类名？还有回调函数形式；星座容器
        this.dom = $('<div></div>').addClass('item num-' + this.num);
        //config统一保存对象中使用的临时变量
        this.config = {
            //xing_zuo_container: $$.$id('myXingzuo')
        }

        this.bindDom();
        this.bindEvents();
    },
    //曾经原型对象中的绑定DOM
    bindDom: function () {
        var str = '';
        str += '<div class="image"></div>';
        str += '<div class="description">';
        str += '<p class="name">{{name}}</p>';
        str += '<p class="time">{{time}}</p>';
        str += '<div class="mark"></div>';
        str += '</div>';

        //报错、排错
        // console.log($$.artTemplate(str, this.data))
        // console.log(this.dom);

        //使用artTemplate模板
        this.dom.html($$.artTemplate(str, this.data)).appendTo($('#myXingzuo'));
    },
    //曾经原型对象中的绑定事件
    bindEvents: function () {
        this.dom.on('click', function () {
            // DOM对象
            // console.log(this);
            //当第二次点击的时候，是没法去掉selected类名的；DOM转jQuery
            //$(this).addClass('selected');
            //不用考虑排它思想，只管自己点击时候触发什么操作
            //DOM转jQuery
            $(this).toggleClass('selected');

            //这里可以在外面定义
            //var that = this;
            //that.dom.toggleClass('selected');
        }).on('mouseenter', function () {
            // console.log('父盒子mouseover，进入子盒子也管用，看次数');
            // console.log('父盒子mouseenter，进入子盒子不管用，看次数');
            $(this).addClass('is-hover');
        }).on('mouseleave', function () {
            // console.log('使用mouseenter和mouseleave对');
            $(this).removeClass('is-hover');
        });
    }
});


var YinYue  = Class.extend({
    init: function (data, bg) {
        this.data = data;
        this.bg = bg;
        this.dom = $('<div></div>').addClass('yinyue');

        this._init();
    },
    _init: function () {
        this.bindDom();
        this.bindEvents();
    },
    bindDom: function () {
        var str = '<h2>热门频道</h2>';
        // console.log(this.data)
        for (var i = 0; i < this.data.length; ++i) {
            // console.log(i);
            str += '<a class="item-'+i+'" onclick="return false;" hidefocus=""><span>'+this.data[i]+'</span></a>';
        }
        // console.log(str);
        $('.card').append(this.dom.html(str)).css('background', this.bg);

    },
    bindEvents: function () {
        this.dom.on('click', 'a', function () {
            $(this).toggleClass('choose').siblings().removeClass('choose');
        })
    }

});

//function YinYue (data, bg) {
//    this.data = data;
//    this.bg = bg;
//    this.dom = $('<div></div>').addClass('yinyue');
//
//    this.init();
//}
//
//YinYue.prototype = {
//    init: function () {
//        this.bindDom();
//        this.bindEvents();
//    },
//    bindDom: function () {
//        var str = '<h2>热门频道</h2>';
//        // console.log(this.data)
//        for (var i = 0; i < this.data.length; ++i) {
//            // console.log(i);
//            str += '<a class="item-'+i+'" onclick="return false;" hidefocus=""><span>'+this.data[i]+'</span></a>';
//        }
//        // console.log(str);
//        $('.card').append(this.dom.html(str)).css('background', this.bg);
//
//    },
//    bindEvents: function () {
//        this.dom.on('click', 'a', function () {
//            $(this).toggleClass('choose').siblings().removeClass('choose');
//        })
//    }
//}

function News(data, bg) {
    this.data = data;
    //背景图片
    this.bg = bg;
    //.card div 下面的父盒子
    this.dom = $('<div></div>').addClass('loop-img').attr('id', 'loop_img');
    //定时器
    this.timer = null;
    //定时器控制滚动
    this.num = 0;
    this.init();
}
News.prototype = {
    init: function () {
        this.bindDom();
        this.bindEvents();
        this.start();
    },
    bindDom: function () {
        //这个难度好大，代码中间有可以遍历构造的，先用格式化字符串代替，之后再替替替
        var frame = [
            '<div class="d-img-frame" num="0">',
                '<div class="d-img-cell">@(bigImgTpl)</div>',
                '<div class="d-img-mask"></div>',
            '</div>',
            '<div class="d-img-arrow go-pre">',
                '<a href="#" onclick="return false;" hidefocus="" class="arrow"></a>',
            '</div>',
            '<div class="d-img-arrow go-next">',
                '<a href="#" onclick="return false;" hidefocus="" class="arrow"></a>',
            '</div>',
            '<div class="d-title-mask"></div>',
            '<a class="d-title" href="@(url)" target="_blank" hidefocus="">@(title)</a>',
            '<div class="d-bars">@(smallImgTpl)</div>',
        ].join(''),
            bigImgTpl = [
                '<a href="@(url)" class="d-img-link" target="_blank"><img height="260" width="426" src="@(imgUrl)"></a>'
            ].join(''),
            smallImgTpl = [
                '<span class="d-small @(curspan)" num="@(num)">',
                '<img class="d-small-img" height="40" width="68" src="@(imgUrl)">',
                '<span class="d-small-mask"></span>',
                '</span>'
            ].join('');

        // console.log(frame);
        var bigTpl = '', smallTpl = '';
        for (var i = 0; i < this.data.length; ++i) {
            this.data[i].curspan = i == 0 ? 'current' : '';
            this.data[i].num = i;
            //这里出错了。。。持续对其进行+就错了
            //this.data[i].imgUrl = 'img/' + this.data[i].imgUrl + '.jpg';
            bigTpl += $$.formateString(bigImgTpl, this.data[i]);
            smallTpl += $$.formateString(smallImgTpl, this.data[i]);
        }
        // console.log(this.data);
        var str = $$.formateString(frame, {
            bigImgTpl: bigTpl,
            smallImgTpl: smallTpl,
            url : this.data[0].url,
            title: this.data[0].title
        })


        $('.card').append(this.dom.html(str)).css('background', this.bg);
    },
    bindEvents : function(){
        var that = this;
        $('.loop-img').on('mouseenter', function(){
            $('.loop-img').addClass('show-arrow');
            that.stop();
        }).on('mouseleave', function(){
            $('.loop-img').removeClass('show-arrow');
            that.start();
        });

        $('.d-bars>span').on('click', function () {
            // console.log($(this).index());
            // console.log(that.num);
            //因为go函数里面上来就+1
            that.num = $(this).index()-1;
            that.go(that)();
            // console.log(that.go(that));
        });
        //很重要！！当重复点击左侧新闻时候，得清除上一次的定时器！！！！如何清除？
        $('.menu').on('click', 'span', function () {
            if (that != null && $(this).index() == 2) {
                that.stop();
                // console.log('清除上次定时器，重新开始。');
            }
        })
    },
    stop : function () {
        clearInterval(this.timer);
        this.timer = null;
    },
    start: function () {
        this.stop();
        //闭包函数，自己领悟
        this.timer = setInterval(this.go(this), 1500);
        // console.log(this.data.length)
    },
    go: function (that) {
        return function () {
            // console.log(that.data.length);
            // console.log(111)

            that.num += 1;
            that.num = that.num >= that.data.length ? 0 : that.num;
            //大图片父盒子
            $('.d-img-cell').css('left', -426*that.data[that.num].num + 'px');

            // 这里巧妙：有current的span，把current删除
            $('.d-small').removeClass('current');
            //小图片 当前这个span加上current类名
            //$('.d-bars span').eq(i).addClass('current');
            $('.d-small').eq(that.num).addClass('current');
            // console.log(i, $('.d-bars span').eq(i))
            //文字
            $('.d-title').html(that.data[that.num].title);
        }
    }
}


function Monitor() {
    //this.id = id;
    this.jsonpUrl = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=';
    this.searchUrl = 'https://www.baidu.com/s?wd=';
    //var that = this;

    this.init();
}
Monitor.prototype = {
    init: function () {
        this.bindEvents();
    },
    bindDom: function () {

    },
    bindEvents: function () {
        // console.log(that)
        var that = this;
        //输入框内有输入
        $('.search input').on('keyup', function (e) {
            var keyword = $(this).val();
            var url = that.jsonpUrl +keyword;

            that.queryBaiDu(url);
        }).on('blur', function () {
            //alert('逝去焦点')
            //如果立马执行词语此语句，则无法实现下面的单击跳转了。
            setTimeout(function () {
                $$.$id('result').innerHTML = '';
            }, 200);
        });
        //点击跨域请求的过来的搜索结果时候，跳转
        $('#result').on('click', 'li', function () {
            //打开一个新的窗口，window.open('http://www.baidu.com')
            var goTo = that.searchUrl + $(this).html();
            //$$.$id('result').innerHTML = '';
            window.open(goTo);
        });
        //单击百度搜索按钮
        $('#baidu_so').click(function () {
            // console.log($('#baidu_txt').val())

            if ($('#baidu_txt').val() != '') {
                window.location = that.searchUrl + $('#baidu_txt').val();
            }
        });
        //输入框不为空，按回车键
        $(window).on('keyup', function (e) {
            // console.log(e);
            if (e.key == 'Enter' && $('#baidu_txt').val() != '') {
                window.location = that.searchUrl + $('#baidu_txt').val();
            }
        })
    },
    queryBaiDu: function(url) {
        var that = this;
        $$.$id('result').innerHTML = '';
        $.ajax({
            type: 'get',
            url: url,
            //必须声明是用jsonp
            dataType: "jsonp",
            //jQuery使用下面两个参数，拼接url，发送给百度
            jsonp: 'cb',
            jsonpCallback: 'callback',
            //jQuery将该参数翻译成你的callback，然后执行下面函数
            success: function (data) {
                that.joinCallback(data.s);
            }
        })
    },
    joinCallback: function(data) {
        $.each(data, function (key, value) {
            // console.log(key, value)
            $('<li></li>').html(value).appendTo($('#result'));
        });
    }
}



//动态处理中间菜单栏
window.addEventListener('load', function () {
    // console.log('aaa')
    //刷新页面时候，自动获得焦点
//    $('.search input').focus();

    //$('.menu span').each(function (i, n) {
    //    // console.log(i, n)
    //    $(this).on('click', function () {
    //        //$(this).toggleClass('choose');
    //        $(this).attr('class', 'choose').siblings().removeClass('choose');
    //        // console.log($(this).index())
    //    })
    //})

    //搜索框
    new Monitor();

    $('#login').click(function () {
        var str = ['<div class="menu">',
            '<span class="choose">导航</span>',
            '<span>音乐</span>',
            '<span>新闻</span>',
            '<span>星座</span>',
            '</div>',
            '<div class="card">',
            '<div class="nav">可以点击左侧菜单试试效果</div>',
            '</div>'].join('');
        $('.container').html(str);

        spa();
    });

    function spa() {
        var datas = [
            [0],
            [
                '私人频道',
                '红心频道',
                '随便听听',
                '欧美',
                '经典老歌',
                'DJ舞曲',
                '热歌',
                '网络红歌',
                '成名曲',
                '火爆新歌',
                '流行',
                '快乐旋律',
                'KTV金曲',
                '伤感调频',
                '80后',
                '90后'
            ],
            [
                {
                    url : 'http://photo.gmw.cn/2013-12/27/content_9938379.htm',
                    title : '新浪图片，年度盘点',
                    imgUrl : '1'
                },
                {
                    url : 'http://photo.gmw.cn/2013-12/27/content_9938379.htm',
                    title : '意大利回流茅台拍出78.2万',
                    imgUrl : '2'
                },
                {
                    url : 'http://photo.gmw.cn/2013-12/27/content_9938379.htm',
                    title : '绵阳舰在失联海域发现可疑漂浮物',
                    imgUrl : '3'
                },
                {
                    url : 'http://photo.gmw.cn/2013-12/27/content_9938379.htm',
                    title : '曝奶茶妹妹与70后京东掌门热恋',
                    imgUrl : '4'
                },
                {
                    url : 'http://photo.gmw.cn/2013-12/27/content_9938379.htm',
                    title : '抢购年代，不抢就没了',
                    imgUrl : '5'
                }
            ],
            [
                {
                    name:'白羊座',
                    time:'3.21-4.19'
                }
                ,{
                name:'金牛座',
                time:'4.20-5.20'
            }
                ,{
                name:'双子座',
                time:'5.21-6.21'
            }
                ,{
                name:'巨蟹座',
                time:'6.22-7.22'
            }
                ,{
                name:'狮子座',
                time:'7.23-8.22'
            }
                ,{
                name:'处女座',
                time:'8.23-9.22'
            }
                ,{
                name:'天秤座',
                time:'9.23-10.23'
            }
                ,{
                name:'天蝎座',
                time:'10.24-11.22'
            }
                ,{
                name:'射手座',
                time:'11.23-12.21'
            }
                ,{
                name:'摩羯座',
                time:'12.22-1.19'
            }
                ,{
                name:'水瓶座',
                time:'1.20-2.18'
            }
                ,{
                name:'双鱼座',
                time:'2.19-3.20'
            }
            ]
        ];
        //处理I'imgUrl'
        for (var i = 0; i < datas[2].length; ++i) {
            datas[2][i].imgUrl = 'img/' + datas[2][i].imgUrl + '.jpg';
        }
        var data = [];
        var bgs = ['0', 'rgba(255,255,255,0.6) url(baidu/music.png)', 'rgba(255,255,255,0.6) url(baidu/news.png) right top no-repeat', 'rgba(255,255,255,0.6) url(baidu/xingzuo.png)']

        $('.menu').on('click', 'span', function () {
            $('.card').html('');
            $(this).addClass('choose').siblings().removeClass('choose');
            // console.log($(this).index())

            switch ($(this).index()) {
                case 0:
                    $('.card').html('<div class="nav">可以点击左侧菜单试试效果</div>').css('background', 'rgba(255,255,255,0.6)');
                    break;
                case 1:
                    // console.log(data);
                    new YinYue(datas[1], bgs[1]);
                    break;
                case 2:
                    data = datas[2];
                    // console.log(data);
                    new News(data, bgs[2]);
                    break;
                case 3:
                    var $div = $('<div></div>').addClass('xingzuo').attr('id', 'myXingzuo');
                    $('.card').append($div).css('background', 'rgba(255,255,255,0.6) url(baidu/xingzuo.png)');
                    //  使用对象描述数据
                    data = datas[3];
                    // 实例化12个星座 -- 每次实例化都自动调用init函数
                    for (var i = 0; i < data.length; ++i) {
                        new XingZuo(data[i], i);
                    }
                    break;
            }
        });
    }
});

//要想使用多个windown.onload，addEventListener这样解决
//处理搜索框，ajax
//window.addEventListener('load', function () {
//    // console.log('aaa')
//    $('.search input').on('keyup', function (e) {
//        // console.log(e)
//        var keyword = $(this).val();
//        // console.log(txt)
//        //var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+keyword+'&cb=callback';
//        var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+keyword;
//
//        queryBaiDu(url);
//    })
//})
//
//function queryBaiDu (url) {
//    $$.$id('result').innerHTML = '';
//    $.ajax({
//        type: 'get',
//        url: url,
//        //必须声明是用jsonp
//        dataType: "jsonp",
//        //jQuery使用下面两个参数，拼接url，发送给百度
//        jsonp: 'cb',
//        jsonpCallback: 'callback',
//        //jQuery将该参数翻译成你的callback，然后执行下面函数
//        success: function (data) {
//            // console.log(data.s);
//            joinCallback(data.s);
//        }
//    })
//}
//
//function joinCallback(data) {
//    $.each(data, function (key, value) {
//        // console.log(key, value)
//        $('<li></li>').html(value).appendTo($('#result'));
//    });
//}
