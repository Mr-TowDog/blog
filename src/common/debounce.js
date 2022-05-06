export default function(fun, num, bool = false) {
    var time;
    return function() {
        var arg = arguments;
        var $this = this;
        if (time) clearTimeout(time);
        if (bool) {
            var cc = !time;
            time = setTimeout(function() {
                time = false;
            }, num);
            if (cc) fun.call($this, ...arg);
        } else {
            time = setTimeout(function() {
                fun.call($this, ...arg)
            }, num);
        }
    }


}