$(function() {
  $('.header__lang').on('click', function() {
    $(this).toggleClass('active');
  })
  $(document).mouseup(function(e) {
    var div = $(".header__lang");
    var button = $(".header__lang__cur, .header__lang__cur *");
    if (!button.is(e.target) && !div.is(e.target) && div.has(e.target).length === 0) {
      $(".header__lang").removeClass("active");
    }
  });

  $('.s_faq__itm').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active');
    $this.find('.s_faq__ansver').slideToggle(250);
  });


  $('section').viewportChecker({
    offset: window.innerHeight / 2,
    repeat: 1,
    callbackFunction: function(elem, action) {
      var curSection = $('.header nav li a[href="#' + elem.attr('id') + '"]');
      $('.header__nav li a.active').not(curSection).removeClass('active');
      curSection.addClass('active');
    }
  });


  var vh = window.innerHeight;
  var s_home_h = $('.s_home').height() - 150;

  $(window).scroll(function() {
    var t = $('.header__nav li').find('a.active');
    if (t.length) {
      $(".cur-menu-line").css('left', t.position().left).width(t.width())
    } else {
      $(".cur-menu-line").width(0)
    }
    if (window.pageYOffset >= s_home_h) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  });


  $('.anchor').anchor({

  })

  $('.header__nav__bars').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.mob_menu').toggleClass('active');
  });
  $('.mob_menu ul li').on('click', function(event) {
    event.preventDefault();
    $('.header__nav__bars').removeClass('active');
    $('.mob_menu').removeClass('active');
  });




  var tl = new TimelineLite();
  $('.anim').viewportChecker({
    offset: 0,
    callbackFunction: function(elem, action) {
      TweenMax.to(elem, 1, { opacity: 1, x: 0, y: 0, ease: Power1.easeOut });
    }
  });

  $('.anim-child').viewportChecker({
    offset: 0,
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem[0].children, 1, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, 0.1);
    }
  });
  $('.header__nav').viewportChecker({
    offset: 0,
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem.find('li a'), 1, { opacity: 1, x: 0, y: 0, ease: Power1.easeInOut }, 0.1);
    }
  });


  $('.anim-child-scale').viewportChecker({
    offset: '50%',
    callbackFunction: function(elem, action) {
      TweenMax.staggerFromTo(elem[0].children, 0.75,{ opacity: 0, scale: 0.5, ease: Power1.easeInOut }, { opacity: 1, scale: 1, ease: Power2.easeOut}, 0.1);
    }
  });

  $('.s_how__scheme').viewportChecker({
    offset: '50%',
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem[0].children, 1.2,{ opacity: 1, ease: Power0.easeOut}, 0.15);
    }
  });

  $('.s_case__list').viewportChecker({
    offset: '50%',
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem.find('.col-12'), 0.75, { opacity: 1, x: 0, y:0, ease: Power0.easeOut, onCompleteParams:["{self}"], onStartParams:["{self}"], 
        onComplete: (tween)=>{
          $('.s_case__arrow-'+($(tween.target).index()+1)).addClass('active');
        },
        onStart: (tween)=>{
          $(tween.target).find('.s_case__itm').addClass('active');
        }
      }, 0.325);
    }
  });




  $('.s_roadmap__list').viewportChecker({
    offset: 0,
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem.find('li'), 1, {
        opacity: 1,
        ease: Power1.easeInOut,
        onStart: (el) => {
          $(el.target).addClass('visible')
        },
        onStartParams: ["{self}"]
      }, 0.075);
    }
  });





  $('.s_roadmap__chart_axis-x').viewportChecker({
    offset: 0,
    callbackFunction: function(elem, action) {
      TweenMax.staggerTo(elem.find('p'), .75, { opacity: 1, x: 0, ease: Power1.easeInOut }, 0.1);
    }
  });



  $('.img').viewportChecker({
    offset: '50%',
  });


  $('.s_value__chart__graph__line path').each(function(index, el) {
    $el = $(el);
    $el.attr('stroke-dasharray', el.getTotalLength());
    $el.attr('stroke-dashoffset', el.getTotalLength())
  });



  $('.s_value__chart__graph__line').viewportChecker({
    offset: '0%',
    callbackFunction: function(elem, action) {
        elem.find('path').attr('stroke-dashoffset', 0);
    }
  });


});