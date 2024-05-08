var currentQuestion = 0;
var currentProgress = 0;
var currentQuestion2 = 0;
var currentProgress2 = 0;
var dataSend = {};
$('.fake-data').css('display', 'none')
$(".quiz-button_back").css("opacity", "0.5");

$("input[name=radio-section1]").click(function () {
  $('.radio-bottom-text-color').removeAttr('style');
  $(this).parents().eq(2).find('.radio-bottom-text-color').css("color", "#1A8FFB");
  dataSend["1"] = 'Тип помещения: ' + $(this).parents().eq(2).find('.radio-bottom-text-color').text() + '<br>'
});

$("input[name=radio-section2]").click(function () {
  $('.radio-bottom-text-color-section2').removeAttr('style');
  $(this).parents().eq(2).find('.radio-bottom-text-color-section2').css("color", "#1A8FFB");
  dataSend["2"] = 'Тип ремонта: ' + $(this).parents().eq(2).find('.radio-bottom-text-color-section2').text() + '<br>'
});

var checkboxes = [];

$('input[name="checkbox-1"]').click( function () {
  

  checkboxes.push(($(this).next().children().text()))
    
    checkboxes = Array.from(new Set(checkboxes));
    dataCheckboxes = checkboxes.join(', ').toLocaleLowerCase();
    dataSend["3"] = 'Что нужно отремонтировать: ' + dataCheckboxes + '<br>'
    
});

$('input[name=radio-section5]').click(function(){

    dataSend["5"] = 'Дизайн-проект: ' + $('input[name=radio-section5]:checked').next().text() + '<br>'
  
});

$('input[name=radio-section6]').click(function(){

  dataSend["6"] = 'Начинаем работу: ' + $('input[name=radio-section6]:checked').next().text() + '<br>'

});

$('input[name=radio-section7]').click(function(){

  dataSend["7"] = 'Подарок: ' + $('input[name=radio-section7]:checked').next().text() + '<br>'

});


$(".slider").slider({
  animate: true,
  range: "min",
  value: 0,
  min: 0,
  max: 300,
  step: 1,

  slide: function (event, ui) {
    $('.input_plugin_number').val(ui.value);
    $('.numb').val(ui.value);
    $('#quizrange').attr('value', ui.value);
  },


});


//initialize swiper when document ready

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  on: {
    slideChangeTransitionStart: function () {
      if (mySwiper.realIndex != 0) {
        $(".quiz-button_back").css("opacity", "1");
      } else {
        $(".quiz-button_back").css("opacity", "0.5");
      }
    },
    slideNextTransitionStart: function () {









      document.getElementById('progress-width_bar').style.width = currentProgress + 14.28 + '%';
      currentProgress = parseFloat(document.getElementById('progress-width_bar').style.width);
    },





    slidePrevTransitionStart: function () {

      

      document.getElementById('progress-width_bar').style.width = currentProgress - 14.28 + '%';
      currentProgress = parseFloat(document.getElementById('progress-width_bar').style.width);





    },



    slideChange: function () {

      if (mySwiper.realIndex == 6) {
      

        document.getElementById('quiz-progressbar-text_id').innerHTML = 'Выберите подарок по завершению работ!';

      } else {
        document.getElementById('quiz-progressbar-text_id').innerHTML = 'Осталось вопросов ' + (6 - mySwiper.realIndex) + ' из 7';
       
      }



      if (mySwiper.realIndex == 7) {
        if ($(window).width() < 1000) {
      

          $("#quiz-form-section-mobile").css("display", "block");
          $("#quiz-controls-id").css("display", "none");
          $(".quiz-form-pics").css("display", "flex");
          $(".quiz-discount-gift").css("display", "block");


        } else {
         
          $("#swiper-container-id").css("opacity", "0").delay(500).css("display", "none");
          $("#quiz-controls-id").css("display", "none");
          $(".quiz-discount_section2").css("display", "flex");
          $("#form-quiz_text-id").css("display", "block");
          $("#quiz-content_section-id").css("width", "630");
          $("#quiz-form_section-id").css("display", "block");
          $(".quiz-discount-key").css("display", "none");
          $(".quiz-discount-gift").css("display", "block");
        }






      }

    },
  },
  simulateTouch: false,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next-hidden',
    prevEl: '.swiper-button-prev-hidden',
  }



})




document.getElementById("quiz-button-next_id").addEventListener("click", () => {
  
  switch (mySwiper.realIndex) {
    case 0:
        
      if ($('input[name=radio-section1]:checked').is(":checked") == true) {
        $('.quiz-discount_text1').text('2  %'); 
        mySwiper.slideNext();
        
      } else {
       
        slideNextError();
      }
      break;
    case 1:
        if ($('input[name=radio-section2]:checked').is(":checked") == true) {
          $('.quiz-discount_text1').text('3  %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }
      
      break;

    case 2:
        if ($('input[name="checkbox-1"]').is(":checked") == true) {
          $('.quiz-discount_text1').text('4  %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }

      break;

    case 3:
        if ($('.numb').val() != 1) {
          dataSend["4"] = 'Площадь помещения: ' + $('.numb').val() + ' м²' + '<br>';
          $('.quiz-discount_text1').text('5  %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }

      break;

    case 4:
        if ($('input[name=radio-section5]:checked').is(":checked") == true) {
          $('.quiz-discount_text1').text('6  %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }

      break;

    case 5:
        if ($('input[name=radio-section6]:checked').is(":checked") == true) {
          $('.quiz-discount_text1').text('8  %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }

      break;

    case 6:
        if ($('input[name=radio-section7]:checked').is(":checked") == true) {
          $('.quiz-discount_text1').text('10 %');
          mySwiper.slideNext();
        } else {
          slideNextError();
        }

      break;
    default:
      break;
  }




});

document.getElementById("quiz-button-back_id").addEventListener("click", () => {

  mySwiper.slidePrev();
});




document.getElementById("quiz-skip_textId").addEventListener("click", () => {
  dataSend['4'] = 'Площадь помещения: пропуск' + '<br>'
  mySwiper.slideNext();


});









function slideNextError () {
  $(".quiz-button_next").css("opacity", "0.5");
        setTimeout(
          function() 
          {
            $(".quiz-button_next").css("opacity", "1");
          }, 250);
}



$('.numb').number_plugin({
  min: 0,
  max: 300,
  width: '180px',
  height: '70px',
  negative: false
});

$('.input_plugin_number').attr('maxlength', '3');


  
