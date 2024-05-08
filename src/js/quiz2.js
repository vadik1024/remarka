var currentQuestion = 0;
var currentProgress = 0;
var currentQuestion2 = 0;
var currentProgress2 = 0;
var dataSend = {};
$(".quiz-button_back2").css("opacity", "0.5");

$("input[name=radio-section12]").click(function () {
  $('.radio-bottom-text-color2').removeAttr('style');
  $(this).parents().eq(2).find('.radio-bottom-text-color2').css("color", "#1A8FFB");
  dataSend["1"] = 'Тип помещения: ' + $(this).parents().eq(2).find('.radio-bottom-text-color2').text() + '<br>'
});

$("input[name=radio-section22]").click(function () {
  $('.radio-bottom-text-color-section22').removeAttr('style');
  $(this).parents().eq(2).find('.radio-bottom-text-color-section22').css("color", "#1A8FFB");
  dataSend["2"] = 'Тип ремонта: ' + $(this).parents().eq(2).find('.radio-bottom-text-color-section22').text() + '<br>'
});

var checkboxes = [];

$('input[name="checkbox-1-2"]').click( function () {
  

  checkboxes.push(($(this).next().children().text()))
    
    checkboxes = Array.from(new Set(checkboxes));
    dataCheckboxes = checkboxes.join(', ').toLocaleLowerCase();
    dataSend["3"] = 'Что нужно отремонтировать: ' + dataCheckboxes + '<br>'
    
});

$('input[name=radio-section5-2]').click(function(){

    dataSend["5"] = 'Дизайн-проект: ' + $('input[name=radio-section5-2]:checked').next().text() + '<br>'
  
});

$('input[name=radio-section6-2]').click(function(){

  dataSend["6"] = 'Начинаем работу: ' + $('input[name=radio-section6-2]:checked').next().text() + '<br>'

});

$('input[name=radio-section7-2]').click(function(){

  dataSend["7"] = 'Подарок: ' + $('input[name=radio-section7-2]:checked').next().text() + '<br>'

});


$(".slider2").slider({
  animate: true,
  range: "min",
  value: 0,
  min: 0,
  max: 300,
  step: 1,

  slide: function (event, ui) {
    $('.input_plugin_number').val(ui.value);
    $('.numb2').val(ui.value);
    $('#quizrange2').attr('value', ui.value);
  },


});


//initialize swiper when document ready

var mySwiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  on: {
    slideChangeTransitionStart: function () {
      if (mySwiper2.realIndex != 0) {
        $(".quiz-button_back2").css("opacity", "1");
      } else {
        $(".quiz-button_back2").css("opacity", "0.5");
      }
    },
    slideNextTransitionStart: function () {





      document.getElementById('progress-width_bar2').style.width = currentProgress2 + 14.28 + '%';
      currentProgress2 = parseFloat(document.getElementById('progress-width_bar2').style.width);





    },





    slidePrevTransitionStart: function () {

      document.getElementById('progress-width_bar2').style.width = currentProgress2 - 14.28 + '%';
      currentProgress2 = parseFloat(document.getElementById('progress-width_bar2').style.width);

  




    },



    slideChange: function () {

      if (mySwiper2.realIndex == 6) {
        document.getElementById('quiz-progressbar-text_id2').innerHTML = 'Выберите подарок по завершению работ!';


      } else {
        document.getElementById('quiz-progressbar-text_id2').innerHTML = 'Осталось вопросов ' + (6 - mySwiper2.realIndex) + ' из 7';
    
      }



      if (mySwiper2.realIndex == 7) {
        if ($(window).width() < 1000) {
          $("#quiz-form-section-mobile2").css("display", "block");
          $("#quiz-controls-id2").css("display", "none");
          $(".quiz-form-pics2").css("display", "flex");
          $(".quiz-discount-gift2").css("display", "block");



        } else {
          $("#swiper-container-id2").css("opacity", "0").delay(500).css("display", "none");
          $("#quiz-controls-id2").css("display", "none");
          $(".quiz-discount_section22").css("display", "flex");
          $("#form-quiz_text-id2").css("display", "block");
          $("#quiz-content_section-id2").css("width", "630");
          $("#quiz-form_section-id2").css("display", "block");
          $(".quiz-discount-key2").css("display", "none");
          $(".quiz-discount-gift2").css("display", "block");

        }






      }

    },
  },
  simulateTouch: false,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next-hidden2',
    prevEl: '.swiper-button-prev-hidden2',
  }



})




document.getElementById("quiz-button-next_id2").addEventListener("click", () => {
  
  switch (mySwiper2.realIndex) {
    case 0:
        
      if ($('input[name=radio-section12]:checked').is(":checked") == true) {
        $('.quiz-discount_text12').text('2  %');
        mySwiper2.slideNext();
      } else {
        slideNextError2();
      }
      break;
    case 1:
        if ($('input[name=radio-section22]:checked').is(":checked") == true) {
          $('.quiz-discount_text12').text('3  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }
      
      break;

    case 2:
        if ($('input[name="checkbox-12"]').is(":checked") == true) {
          $('.quiz-discount_text12').text('4  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }

      break;

    case 3:
        if ($('.numb2').val() != 1) {
          dataSend['4'] = 'Площадь помещения: ' + $('.numb2').val() + ' м²' + '<br>'
          $('.quiz-discount_text12').text('5  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }

      break;

    case 4:
        if ($('input[name=radio-section5-2]:checked').is(":checked") == true) {
          $('.quiz-discount_text12').text('6  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }

      break;

    case 5:
        if ($('input[name=radio-section6-2]:checked').is(":checked") == true) {
          $('.quiz-discount_text12').text('8  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }

      break;

    case 6:
        if ($('input[name=radio-section7-2]:checked').is(":checked") == true) {
          $('.quiz-discount_text12').text('10  %');
          mySwiper2.slideNext();
        } else {
          slideNextError2();
        }

      break;
    default:
      break;
  }




});

document.getElementById("quiz-button-back_id2").addEventListener("click", () => {

  mySwiper2.slidePrev();
});




document.getElementById("quiz-skip_textId2").addEventListener("click", () => {
  dataSend["4"] = 'Площадь помещения: пропуск' + '<br>'
  mySwiper2.slideNext();


});











function slideNextError2 () {
  $(".quiz-button_next2").css("opacity", "0.5");
        setTimeout(
          function() 
          {
            $(".quiz-button_next2").css("opacity", "1");
          }, 250);
}



$('.numb2').number_plugin({
  min: 0,
  max: 300,
  width: '180px',
  height: '70px',
  negative: false
});





