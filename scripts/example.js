/**
 * Created by caipf on 2017/2/14.
 */

window.onload=function () {
    var para=document.createElement("p");
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt=document.createTextNode("hello world");
    para.appendChild(txt);
}
function popup(winURL) {
    window.open(winURL,'popup','width=320,height=480');
}