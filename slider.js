
var slider_content = document.getElementById('box');

var image = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

var i = image.length;

function nextImage(){
    if(i<image.length){
        i = i + 1;
    }else{
        i = 1;
    }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}
function prewImage(){
    if(i < image.length + 1 && i > 1){
        i = i - 1;
    }else{
        i = image.length;
    }
    slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}