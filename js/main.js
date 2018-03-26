


$('.page-container').hide().fadeIn(2000);
//fadein effect while loading

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


let collapsed = true;

const navigation = {
     
    expandMobile: () => {
        $('nav').slideDown(200);
        collapsed = false;
        $('#hamburger-nav .fa-bars').css('transform' , 'rotate(-90deg)');
      
    },
    collapseMobile: () => {
        $('nav').slideUp(200);
        collapsed = true;
        $('#hamburger-nav .fa-bars').css('transform' , 'rotate(0)');
    },

    check: () => {

     (collapsed) ? navigation.expandMobile() : navigation.collapseMobile();
 
    }
}


$('#hamburger-nav').on('touch click' , navigation.check);




$(".food-container").hide();
let clicked = [];

const menu = {

    show : function() {
        let target = $(this).text();
        clicked.push(target);
        
        if (clicked[clicked.length-1] == clicked[clicked.length-2]) {
            $(".food-container").slideUp(200);
            $('.exit').hide();
            clicked = [];
        } else {
            switch(target) {
                case 'Śniadania' : 
                $(".food-container")
                .css({
                    'width' : '90%',
                    'padding' : '1.5em 0.5em 1em 1.5em'
                })
                .html("<p>Zestaw śniadaniowy 1 (szynka, ser, pomidory, ogórek, masło, chleb) </p><span>11.00zl</span><hr>\
                <p>Zestaw śniadaniowy 2 (szynka, ser, pomidory, jajko gotowane, masło, chleb) </p><span>11.00zl</span><hr>\
                <p>Zestaw śniadaniowy 3 (jajecznica na szynce, pomidory, masło, chleb) </p><span>11.00zl</span>")
                .slideDown(200);
                $('.exit').css('display' , 'block')
               
                break;
            }
        }
      
    }
}

$('#menu .wrapper div').on('click touch' , menu.show);
$('.exit').on('click' , function() {
    $(".food-container").slideUp(200);
    $(this).hide();
    clicked = [];
});


// show/hide icon on top which is scrolling page to the top

$(window).on('scroll' , function() {
   
       if ($(window).scrollTop() > 150) {
        $(".scrollTop").slideDown(100);
        $('.border').css('height' , '0.2em');
       } else {
        $(".scrollTop").slideUp(100);
        $('.border').css('height' , '0.5em');
       }

    
})

$(".scrollTop").on('click' , function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    // return false;
  });