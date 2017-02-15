/**
 * Created by caipf on 2017/2/15.
 */
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}