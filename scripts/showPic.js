/**
 * Created by caipf on 2017/2/4.
 */

function showPic(whichpic) {

    if(!document.getElementById("placeholder")){
        return false;
    }
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    if(document.getElementById("description")){
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        description.firstChild.nodeValue=text;
    }
    return true;
}

function countBodyChildren() {
    var body_element=document.getElementsByTagName('body')[0];
}

function prepareGallery() {
    if(!document.getElementsByName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");

    for(var i=0;i<links.length;i++){
        links[i].onclick=function () {
           return !showPic(this);
        }
        //links[i].onkeypress=links[i].onclick;
    }
}
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
addLoadEvent(prepareGallery);

// function prepareGalleryt() {
//     if(document.getElementsByTagName && document.getElementById ){
//         var imagegallery=document.getElementById("imagegallery");
//         if(imagegallery){
//             var aele=imagegallery.getElementsByTagName("a");
//             for(var i=0;i<aele.length-1;i++){
//                  showPic(aele[i]);
//             }
//         }
//     }
// }

//window.onload=countBodyChildren;