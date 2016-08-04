"to String"
 /*function add(x){
	x.style.height = "75px";
	x.style.width = "75px";

}
var rem = function(x){
	x.style.height = "50px";
	x.style.width = "50px";
}
*/

 //				Carusel bootstrap




window.onload = function(){
	


//console.log(slides)



	var images = document.querySelectorAll('.img_pos'),
  slider = next(images);
  s_prev = prev(images);
  console.log(images)
  i_pos = document.getElementsByClassName("active");
  console.log(i_pos)
 

//Position of image

function position() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");
    document.getElementById("demo").innerHTML = a;
}

position()



function next(arr) {
  var max = arr.length - 1,
    i = 0;
  return function() {
    i = i < max ? i + 1 : 0;
    return arr[i];
   };
}
//    NEXT 
document.getElementById("next").onclick = function() {
  var len = images.length;
  while (len--) images[len].className = 'img_pos';
  slider().className += ' active';
}

//      PREV

function prev(arr) {
  var max = 0;
      i = arr.length - 1;
  return function() {
    i = i < max ? i + 1 : i;
    return arr[i--];
 
   };
};

document.getElementById("prev").onclick = function() {
  var len = images.length;
  while (len--) images[len].className = 'img_pos';
  s_prev().className += ' active';

};
/*		function imagePosition(){
			i_pos = images.indexOf("active");
			return i_pos;
		}

imagePosition()
*/
};


/*
    var img =  images.indexOf(document.getElementsByClassName("active"));



*/