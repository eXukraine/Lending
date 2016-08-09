
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




	/*
  var elements = $(".img_pos");
  console.log(elements)

     next = function(){
      var active = elements.filter('.active').removeClass('active');
        var nextElement = active.next().length?active.next():elements.eq(0);
        nextElement.addClass("active");

        console.log(active)


    };
         prev = function(){
      //i_act = $('.active').removeClass('active').prev().addClass('active');
      //  console.log(i_act);

          var active = elements.filter('.active').removeClass('active');
            var prevElement = active.prev().length?active.prev():elements.eq(-1);
            prevElement.addClass("active");

    };



/*var slider = new nav(document.querySelectorAll('#img_pos')); 
//var images = document.querySelectorAll('.img_pos'); 
console.log(nav);     
function nav(arr) {
    var current = 0, len = arr.length - 1;
    this.next = function () {
        current =  current < len ? current + 1 : 0;
        return arr[current];

    };
    this.prev = function () {
        current = current > 0 ? current - 1 : len;
        return arr[ current];
    };
}



document.getElementById("next").onclick = function() {
  var len = slider.length;
  while (len--) slider[len].className = 'img_pos';
  slider.next().className += ' active';
	
/*	 var len = slider.length;
  	while (len--) slider[len].className = 'img_pos';
slider.next().className += ' active';
*/

/*};

prev.onclick = function () {
    slider.prev().className += ' active';
     var len = slider.length;
  		while (len--) slider[len].className = 'img_pos';
};

p_button.onclick = function(){
	ell = document.getElementsByClassName("p_demo1");
		//alert(ell);
		ell.className ="";
			ell.className = "p_demo2";
};
*/








//---------------------------------------------------------------------------------------------------------------
//console.log(slides)



/*	var images = document.querySelectorAll('.img_pos');
  slider = next(images);
  s_prev = prev(images);
  console.log(images);

  function imgPos() {
  active = document.querySelectorAll(".active");
  console.log(active)
}
imgPos();

 // i_pos = document.getElementsByClassName(".active").indexOf(active);
  
  //i_pos = images.indexOf(".active");
// console.log(i_pos);

//Position of image

/*function position() {
    var fruits = document.querySelectorAll('.img_pos');
    var a = fruits.indexOf(".active");
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
  imgPos();
}

//      PREV

function prev(arr) {
  var max = 0;
      i =  arr.length -1;
  return function() {
    i = i < max ? i + 1 : i;
 	return arr[i--];	
   };
};

document.getElementById("prev").onclick = function() {
  var len = images.length ;
  while (len--) images[len].className = 'img_pos';
  s_prev().className += ' active';
  imgPos()

};
/*		function imagePosition(){
			i_pos = images.indexOf("active");
			return i_pos;
		}

imagePosition()

*/






    


