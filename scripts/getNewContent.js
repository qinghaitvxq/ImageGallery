/**
 * Created by caipf on 2017/2/15.
 */
function getNewContent() {
    var request=getHTTPObject();
    if(request){
        request.open('GET','example.txt',true);
        request.onreadystatechange=function () {
            if(request.readyState==4){
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert('sorry,you browser does not support XMLHttpRequest');
    }
}
addLoadEvent(getNewContent);