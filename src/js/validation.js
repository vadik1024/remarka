$('.form-send-offer').submit(function (e) {
    if ($('input[name="privacy-offer"]').is(':checked') == true) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            console.log('success');
          
            $('.popup').css('display', 'none');
            $(".thank-you-block").addClass("animated zoomIn");
            $('.thank-you').show();
           

        }).fail(function () {
            console.log('fail');
        });
    } else {

        alert('Вы не ознакомились с политикой конфиденциальности.')
        e.preventDefault();
    }
    e.preventDefault();
});


$('.form-send-popup').submit(function (e) {
    if ($('input[name="privacy-popup"]').is(':checked') == true) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            console.log('success');
            $('.popup').css('display', 'none');
            $(".thank-you-block").addClass("animated zoomIn");
            $('.thank-you').show();

        }).fail(function () {
            console.log('fail');
        });
    } else {

        alert('Вы не ознакомились с политикой конфиденциальности.')
        e.preventDefault();
    }
    e.preventDefault();

}); 


$(".nameR").on("keypress", function(e) {
  
  var char = /^[А-Яа-яЁё]+$/; 
  var val = String.fromCharCode(e.which);
  var test = char.test(val);
  
  if(!test) return false
})