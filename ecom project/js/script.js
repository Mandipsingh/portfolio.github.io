 $(document).ready(function () {
     $(function () {
         var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
         $('.Nav-text').each(function () {
             if (this.href === path) {
                 $(this).addClass('active');
             }
         });
     });
     $('.fadein0 img:gt(0)').hide(); // product image slide show
     $(".fadein0").hover(function () {
         timer = setInterval(function () {
             $('.fadein0 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein0');
         }, 2000);
     }, function () {
         clearInterval(timer);
     });
     $('.fadein01 img:gt(0)').hide(); // product image slide show
     $(".fadein01").hover(function () {
         timer = setInterval(function () {
             $('.fadein01 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein01');
         }, 2000);
     }, function () {
         clearInterval(timer);
     });
     $('.fadein img:gt(0)').hide(); // product image slide show
     $(".fadein").hover(function () {
         timer = setInterval(function () {
             $('.fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein');
         }, 2000);
     }, function () {
         clearInterval(timer);
     });
     $('.fadein1 img:gt(0)').hide(); // product image slide show
     $(".fadein1").hover(function () {
         timer = setInterval(function () {
             $('.fadein1 :first-child').fadeOut().next('img').fadeIn().end().appendTo('.fadein1');
         }, 2000);
     }, function () {
         clearInterval(timer);
     });
     $('#right-arrow').click(function () { //banner slide
         var currentSlide = $('.slide1.active');
         var nextSlide = currentSlide.next();
         currentSlide.fadeOut(300).removeClass('active');
         nextSlide.fadeIn(300).addClass('active');
         if (nextSlide.length == 0) {
             $('.slide1').first().fadeIn(300).addClass('active');
         }
     });
     $('#left-arrow').click(function () {
         var currentSlide = $('.slide1.active');
         var prevSlide = currentSlide.next();
         currentSlide.fadeOut(300).removeClass('active');
         prevSlide.fadeIn(300).addClass('active');
         if (prevSlide.length == 0) {
             $('.slide1').first().fadeIn(300).addClass('active');
         }
     });
     $("#slider > div:gt(0)").hide();
     var interval = setInterval(function () {
         $('#slider > div:first').fadeIn().next().fadeOut().end().appendTo('#slider');
     }, 4000);
     $('#slider').mouseenter(function () {
         clearInterval(interval);
     }).mouseleave(function () {
         setInterval(interval);
     });
     
     $("#gototop").click(function (e) {                //scroller
         e.preventDefault();
         $("html,body").animate({
             "scrollTop": "0px"
         }, 700, )
     });
     $(window).scroll(function () {
         var x = $(this).scrollTop();
         if (x >= 200) {
             $("#gototop").fadeIn()
             
         }
         else {
             $("#gototop").fadeOut()
         }
     });
    
 });



 function openProduct(evt, productName) { //tabs button
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(productName).style.display = "block";
     evt.currentTarget.className += " active";
 }
 var clicks = 0; //like or add button
 function onClick() {
     clicks += 1;
     document.getElementById("clicks").innerHTML = clicks;
 };