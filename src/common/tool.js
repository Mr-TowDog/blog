//一键返回到顶部
export function scroll(playlook) {
    var top = window.scrollY;
    var Symbol = false;
    if (top > playlook) Symbol = true;
    var num = (playlook - top) / 50;
    console.log(num, playlook, window.scrollY);
    (function() {
        var time = setInterval(() => {
            top += parseInt(num);
            window.scrollTo(0, top);
            console.log(Math.abs(top), playlook)
            if (Symbol) {
                if (top < playlook) {
                    clearInterval(time)
                }
            } else {
                if (top > playlook) {
                    clearInterval(time)
                }
            }

        }, 5);
    })();
}