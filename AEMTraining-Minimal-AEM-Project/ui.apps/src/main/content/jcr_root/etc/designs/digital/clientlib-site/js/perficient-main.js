
testimonialBlocks = function() {
    var width = $(window).width()
    if (width < 768) {
        $(".testimonial-blocks .testimonial").hide();
        $(".testimonial-blocks .testimonial:first-child").show();
    } 
    if (width >= 768 && width < 992) {
        $(".testimonial-blocks .testimonial").hide();
        $(".testimonial-blocks .testimonial:nth-of-type(-n+2)").show();
    } 

    if (width >= 992) {
        $(".testimonial-blocks .testimonial").show();
    }
}



$(document).ready(testimonialBlocks);
$(window).resize(testimonialBlocks);


//Controls loading of more Cards in Cards component as well as it's responsiveness
respCards = function() {
    var width = $(window).width()
    if (width >= 992) {
        $(".cards-section:not(.expanded) .card-group .card").hide();
        $(".cards-section:not(.expanded) .card-group .card:nth-of-type(-n+4)").show();
    } 

    else {
        $(".cards-section:not(.expanded) .card-group .card").hide();
        $(".cards-section:not(.expanded) .card-group .card:nth-of-type(-n+3)").show();
    }
    $(".cardsbutton").click(function(e){
        var cardsContainer = $(this).closest(".cards-section").attr("id");
        e.preventDefault();
        $("#" + cardsContainer + " .card-group .card:hidden").slideDown( "slow", function() {
            // Animation complete.
        });
        $("#" + cardsContainer + " .button-wrapper").fadeOut();
    });
    
    $(".cards-section:not(.static) .button-wrapper").show();
}

$(document).ready(respCards);
$(window).resize(respCards);

//sets equal heights to all Cards
equalheight = function(cardContainer){
  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;

  // Reset any heights already assigned to each item
  $(cardContainer).each(function() {
    $(this).height('auto');
  });

  $(cardContainer).each(function() {
    $el = $(this);

    topPostion = $el.position();

    // Start new row, resetting currentTallest on each and emptying row array
    if(currentRowStart != topPostion.top) {
      currentRowStart = topPostion.top;
      currentTallest = 0;
      rowDivs.length = 0;
    }

    rowDivs.push($el);

    // Find tallest item in the row
    if(currentTallest < $el.height()) {
      currentTallest = $el.height();
    }

    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
    }

  });

}

$(window).on('load resize',function() {
  equalheight('.cards-section:not(.eventpanels) .card-group .card:not(.expanded)');
  equalheight('.card-group .card:not(.expanded) .card-content .event-table .event-row .event-details');
  equalheight('.card-group .card:not(.expanded) .card-content .event-table .event-row .event-host');
  equalheight('.panel-wrapper .card');
  equalheight('.panel-wrapper .card .event');
  equalheight('.panel-wrapper .card .card-footer');
  equalheight('.award-card h1');
  equalheight('.award-card .award-card-content');
  // - profile page fix equalheight('.profile-overlay .container .profile-overlay-wrapper .profile-block');
});

//Adds load more functionality to Tiles component
loadTiles = function() {
    
        $(".tiles-row.hidden").hide();
        $(".tiles-row").slice(0, 1).show();
   
    
    $(".tiles-load-button").click(function(e){
        var tilesContainer = $(this).closest(".tiles-wrapper").attr("id");
        e.preventDefault();
        $("#" + tilesContainer + " .tiles-row:hidden").slideDown( "slow", function() {
            // Animation complete.
        });
        $("#" + tilesContainer + " .button-wrapper").fadeOut();
    });
    $(".tiles-section .button-wrapper").show();
}

$(document).ready(loadTiles);
$(window).resize(loadTiles);

//Adds load more functionality to cta-squares component
loadSquares = function() {
    
    var width = $(window).width()
    if (width < 992) {
        $(".square-wrapper .square-container").hide();
        $(".square-wrapper .square-container").slice(0, 4).show();
        $(".cta-squares .button-wrapper").show();
    } 

    else {
        $(".square-wrapper .square-container").show();
        $(".cta-squares .button-wrapper").hide();
    }
    
    $(".squaresbutton").click(function(e){
        var squaresContainer = $(this).closest(".cta-squares").attr("id");
        e.preventDefault();
        $("#" + squaresContainer + " .square-wrapper .square-container:hidden").slideDown( "slow", function() {
            // Animation complete.
        });
        $("#" + squaresContainer + " .button-wrapper").fadeOut();
    });
}

$(document).ready(loadSquares);
$(window).resize(loadSquares);

//*******
$('.btn-hero-menu').click(function(){
  $('.hero-slide-menu').toggleClass('on');
  $('.btn-hero-menu').toggleClass('on');
});


$('.dropdown-toggle').dropdown();

$( ".search-icon" ).click(function() {
  $(".search-icon").toggleClass("shown");
});

$( ".mobile-open" ).click(function() {
  $(".mobile-open").parent().toggleClass("open");
});

$("#contact-trigger-overlay").on("click", function() {
  $(".search-icon").removeClass("shown");
});


//tabs Filter

$(".filter-slider").on("click", function() {
  $(this).toggleClass("expanded");
  $(".tab_container").toggleClass("open-filter");
});

$('.tab_drawer_heading, .tabs li').click(function(){
    var tab_id = $(this).attr('rel');
    if($(this).hasClass("active")) {
      $('.tab_drawer_heading, .tabs li').removeClass('active');
      $('.tab_content').removeClass('active');
    } else {
      $('.tab_drawer_heading, .tabs li').removeClass('active');
      $('.tab_content').removeClass('active');

      $(this).addClass('active');
      $(".tab_content[id='"+tab_id+"']").addClass("active");
    }

    
});


stripDesktopDropdown = function() {
    $(".touchevents .main-nav a.nav-link").each(function() {
      $(this).on("click", function() {
        window.location=this.href;
      });
      
    });
}

$(document).ready(stripDesktopDropdown);


$(".profile-overlay .profile-overlay-wrapper .overlay-block").hide();
$(".profile-overlay .profile-overlay-wrapper .profile-block").click(function() {
  $(".profile-overlay .profile-overlay-wrapper .overlay-block").fadeOut();
  $(this).siblings(".profile-overlay .profile-overlay-wrapper .overlay-block").fadeIn();
  setTimeout(function(){
    $("body").addClass("overlay-open");
  },1);
});
$( document ).on( "click", ".overlay-open", function(e) {
  if ($(e.target).closest(".profile-overlay .profile-overlay-wrapper .overlay-block .content-container").length === 0) {
    $(".profile-overlay .profile-overlay-wrapper .overlay-block").fadeOut();
    setTimeout(function(){
      $("body").removeClass("overlay-open");
    },1);
  }
});

jQuery(function($) {
    var $anchors = $('.list a'),
    $items = $('.partners-overlay');

    $anchors.on('click', function() {
        var selectedIndex = $anchors.index(this);
        $items.removeClass('open').eq(selectedIndex).addClass('open');
    });
    $('.close').on('click', function () {
      $items.removeClass('open')
    });
});

(function($) {
  var breakpoint = 768,
      targetExt,
      $container = $('.hero-background-container');
      $heroimage = $('.hero-background');
  
  function loaded() {
    $heroimage.addClass('large-loaded');
  }
  
  // do your thing
  function swapImages() {  
    // above breakpoint, we want to show the large image, vice versa
    targetExt = window.innerWidth >= breakpoint ? '-lg.jpg' : '-sm.jpg';
    
    // grab each image in the hero
    $container.find('img.hero-background').each(function() {
      var currentExt = this.src.slice(-7);
      // only swap the image if the current extension
      // is not the target extension
      if (currentExt != targetExt) {
        this.src = this.src.replace(currentExt, targetExt);
        
        // wait for the large version of the image to be loaded
        if (this.complete) {
          loaded();
        } else {
          this.addEventListener('load', loaded)
        }
      }
    });
  }
  // init on window load and resize
  $(window).on('load resize', swapImages);


  $.advancedHero = {
      "slides" : [],
      heroElement : null,
      ranOnce : false,
      init : function(element) {
          this.heroElement = $(element);
          this.buildNav();
          this.binders();
      },
      buildNav : function() {
          for(var i = 0; i < $.advancedHero.slides.length; i++) {
              var obj = $.advancedHero.slides[i];
              $.advancedHero.heroElement.find('.slide-nav').append('<li><a href="#">'+obj.heading+'</a></li>');
          }
          this.appendInitialSlide();
      },
      appendInitialSlide: function() {
          if($.advancedHero.ranOnce == false) {
              var currentSlide = {
                  heading: $.advancedHero.heroElement.find('.hero-content h1').text(),
                  slideImage: $.advancedHero.heroElement.find('.hero-background').attr('src'),
                  content: $.advancedHero.heroElement.find('.hero-content p').html(),
                  contentBgColor: $.advancedHero.heroElement.attr('class').split(' ').pop(),
                  caption: $.advancedHero.heroElement.find('.hero-caption').html(),
                  buttonText: $.advancedHero.heroElement.find('.hero-content .btn-hero').text(),
                  buttonActionURL: $.advancedHero.heroElement.find('.hero-content .btn-hero').attr('href')
              }
              $.advancedHero.slides.push(
                  {
                      "heading":currentSlide.heading,
                      "slideImage":currentSlide.slideImage,
                      "content":currentSlide.content,
                      "contentBgColor":currentSlide.contentBgColor,
                      "caption":currentSlide.caption,
                      "buttonText":currentSlide.buttonText,
                      "buttonActionURL":currentSlide.buttonActionURL
                  }
              );
              $.advancedHero.ranOnce = true;
          }
      },
      handleLoad : function() {
          if(!$.advancedHero.heroElement.find('.hero-background-container').hasClass('loading')) {
              $.advancedHero.heroElement.find('.hero-background-container').addClass('loading');
          }
      },
      binders : function() {
          var slideNav = $(this.heroElement).find('.slide-nav');
          slideNav.children('li').bind("click", function() {
              var title = $(this).find('a').text();
              $.advancedHero.handleLoad();
              setTimeout(function() {
                  for(var i = 0; i < $.advancedHero.slides.length; i++) {
                      var obj = $.advancedHero.slides[i];
                      if(title == obj.heading) {
                          var dynamicImg = new Image();
                          dynamicImg.onload = function() {
                              $.advancedHero.heroElement.find('.hero-background').attr('src',dynamicImg.src);
                              //swapImages();
                              $.advancedHero.heroElement.find('.hero-background-container').removeClass('loading');
                          }
                          dynamicImg.src = obj.slideImage;

                          $.advancedHero.heroElement.find('.hero-content h1').text(obj.heading);
                          $.advancedHero.heroElement.find('.hero-content p').text(obj.content);
                          $.advancedHero.heroElement.find('.hero-caption').html(obj.caption);

                          if(!$.advancedHero.heroElement.find('.hero-content .btn-hero').length) {
                              $.advancedHero.heroElement.find('.hero-content').append("<a href='" + obj.buttonActionURL + "' class='btn-hero'>" + obj.buttonText + "</a>");
                          } else {
                              $.advancedHero.heroElement.find('.hero-content .btn-hero').remove();
                              $.advancedHero.heroElement.find('.hero-content').append("<a href='" + obj.buttonActionURL + "' class='btn-hero'>" + obj.buttonText + "</a>");
                          }

                          var colorClass = $.advancedHero.heroElement.attr('class').split(' ').pop();
                          $.advancedHero.heroElement.removeClass(colorClass);
                          $.advancedHero.heroElement.addClass(obj.contentBgColor);
                          $.advancedHero.heroElement.find('.slide-btn-close').click();
                      }
                  }
              },200);
              return false;
          });
      }
  }

    $(window).load(function() {
        $.advancedHero.slides = [
            {
                "heading":"Digital Transformation Series",
                "slideImage":"../assets/img/hero/hero-ibm-partner-lg.jpg",
                "content":"This is the main text that show on the slide (slide 2)",
                "contentBgColor":"green",
                "caption":"<a href='#'><img src='../assets/img/adesa-logo.png'><strong>TEST 2:</strong> Another test caption</a>",
                "buttonText":"Action",
                "buttonActionURL":"http://www.perficient.com"
            },
            {
                "heading":"The Connected Enterprise",
                "slideImage":"../assets/img/hero/hero-lifescience-lg.jpg",
                "content":"This is the main text that show on the slide (slide 3)",
                "contentBgColor":"blue",
                "caption":"<a href='#'><img src='../assets/img/adesa-logo.png'><strong>TEST 3:</strong> Yet Another test caption</a>",
                "buttonText":"Action",
                "buttonActionURL":"http://www.perficient.com"
            },
            {
                "heading":"A Story Of Scalability & Success",
                "slideImage":"../assets/img/hero/hero-services-detail-lg.jpg",
                "content":"This is the main text that show on the slide (slide 4)",
                "contentBgColor":"silver",
                "caption":"<a href='#'><img src='../assets/img/adesa-logo.png'><strong>TEST 4:</strong> Here is a longer test caption</a>",
                "buttonText":"Action",
                "buttonActionURL":"http://www.perficient.com"
            }
        ];
        $.advancedHero.init('#hero-main');
    });

}(jQuery));

// Perficient Digital scroll animation JS
$(document).ready(function() {
  var element = document.getElementsByClassName("grid-second-col");
  $(element).addClass('fade-in');

  $(window).scroll(function() {
    if( $(".grid-second-col").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-show');
        $(element).addClass('js-fade-hide');
      }
    }
  });
});

$(window).scroll(function() {
  if($(window).scrollTop() > 100) {
    $('header').addClass('shorter');
  } else {
    $('header').removeClass('shorter')
  }
});
