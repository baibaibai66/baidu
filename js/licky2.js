/**
 * Created by cnnic on 2017/3/29.
 */
var $$ = {
    random: function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    },
    event: {

    }
}

//等价于上面那种形式

//var event = function () {
//
//}
//event.prototype = {
//
//}
//$$.event = new event()