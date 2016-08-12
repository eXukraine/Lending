$('document').ready(function(){


 var elements = $(".itme");
  console.log(elements.length)

     next = function(){

      var active = elements.filter('.active').removeClass("active ");
        var nextElement = active.next().length?active.next():elements.eq(0);
        nextElement.addClass("active ");
        console.log(active)



    };
         prev = function(){
          var active = elements.filter('.active').removeClass('active');
            var prevElement = active.prev().length?active.prev():elements.eq(-1);
            prevElement.addClass("active");
          console.log(active)

    };
});