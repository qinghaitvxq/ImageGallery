/**
 * Created by caipf on 2017/2/15.
 */
function getHTTPObject() {
    if(typeof  XMLHttpRequest=="undefined"){
        XMLHttpRequest=function () {
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }catch (e){}
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch (e){}
            try{
                return new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e){}
            return false;
        }
    }
    return new XMLHttpRequest();
}