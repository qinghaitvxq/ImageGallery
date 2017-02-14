/**
 * Created by caipf on 2017/2/4.
 */

function preparePlaceholder() {
    var placeholder=document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','images/placeholder.png');
    placeholder.setAttribute('alt','my image gallery');
    var description=document.createElement('p');
    description.setAttribute('id','description');
    var desctext=document.createTextNode('Choose an image');
    description.appendChild(desctext);

    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);

    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);


}
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
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
addLoadEvent(preparePlaceholder);
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

// function countBodyChildren() {
//     var body_element=document.getElementsByTagName('body')[0];
// }

//window.onload=countBodyChildren;