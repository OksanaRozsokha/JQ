
$(document).ready(function () {
    //добавление класса по клику
    $('#add-class').on('click', function () {
        $('#add-class').addClass('active');
    });

    //удаление класса по клику
    $('#remove-class').on('click', function () {
        $('#remove-class').removeClass('active');
    });

    //переключение класса по клику
    $('#toggle-class').on('click', function () {
        $('#toggle-class').toggleClass('active');
    });

    //получение какого-то атрибута кнопки по клику
    $('#get-attr').on('click', function () {
        console.log( $('#get-attr').attr('name'));
    });

    //присвоение какого-то атрибута кнопке по клику
    $('#set-attr').on('click', function () {
        $('#set-attr').attr('disabled','disabled');
    });

    //вызов всплывающего окна по клику
    $('#alert-click').on('click', function () {
       alert('Hello, world');
    });

    // тригер alertOnClick кнопки по клику
    $('#trigger-alert').on('click', function () {
        $('#alert-click').trigger('click');
    });

    // склонировать кнопку, дописать текст "(cloned)" и вставить её сразу после этой кнопки
    $('#clone-this').on('click', function () {
        $('#clone-this').clone().appendTo('.buttons-list li:nth-child(8)').append('Cloned').css({'display' : 'inline-block', 'margin-left' : '15px'});
    });

    // ближайший родитель
    $('#closest-element').on('click', function () {
        console.log( $('#closest-element').parent());
    });

    // по клику вывести масив текста кнопок
    $('#text-btn').on('click', function () {
        let textBtns = [];
        $('button').each(function () {
            textBtns.push($(this).text());
        });
        console.log(textBtns);
    });

    //найти эту кнопку в теге body и вывести в консоль результат поиска
    $('#find-me').on('click', function () {
        console.log( $('body').find('#find-me'));
    });

    //показать  текст через fadeIn
    $('#fade-in').on('click', function () {
        $('#fade-in').parent().find('p').fadeIn();
    });

    // скрыть  текст через fadeOut
    $('#fade-out').on('click', function () {
        $('#fade-out').parent().find('p').fadeOut();
    });

    //скрыть этот текст через hide
    $('#hide-text').on('click', function () {
        $('#hide-text').parent().find('p').hide();
    });

    // показать текст через show
    $('#show-text').on('click', function () {
        $('#show-text').parent().find('p').show();
    });

    //вывести следую+щие данные через запятые в консоль: высота кнопки, ширина кнопки, абсолютную позиция по обеим осям,
    // значение всех атрибутов, родительский элемент, соседние кнопки сверху и снизу, текст кнопки
    $('#about-me').on('click', function () {
        let aboutBtn = $('#about-me');
        let allAttr = '';
        $.each(this.attributes, function() {
           allAttr +=this.name + ':' + this.value + ';' + '';
        });

        console.log(
            allAttr,
            aboutBtn.text(),
            aboutBtn.width(),
            aboutBtn.height(),
            aboutBtn.offset(),
            aboutBtn.parent(),
            aboutBtn.parent().prev().find('button'),
            aboutBtn.parent().next().find('button')
        );
    });

    //    form

    //выводить в консоль значение изменяемого селекта
    $('#select-first').change(function () {
        console.log($('#select-first :selected').val());
    });
    $('#select-second').change(function () {
        console.log($('#select-second :selected').val());
    });

    //выводить в консоль значение изменяемого поля
    $("input[type='text']").change(function() {
        //при изменении одного поля - дублировать значение в другое поле
        let valueItem = $(this).val();
        $(this).parent().next().find('input').val(valueItem);

        console.log(valueItem);
    });

    //кнопка не должна сабмититься! Так же вывести в консоль ВСЕ значения каждого филда, радио кнопки,
    // чекбокса по этому событию.
    $('#form-btn').on('click', function () {
       $('#my-form').submit(function (eventObject) {
           eventObject.preventDefault();
           $("input[type='text']").each(function () {
              console.log( $(this).val());
           });
           $("input[type='checkbox']").each(function () {
               console.log( $(this).val());
           });
           $("input[type='radio']").each(function () {
               console.log( $(this).val());
           });
       });
    });

    $('#first-field').keypress(function(eventObject){
        console.log('your symbol is ' + eventObject.which);
    });
    $('#second-field').keydown(function(eventObject){
        console.log('your symbol is ' + eventObject.which);
    });
    $('#third-field').keyup(function(eventObject){
        console.log('your symbol is ' + eventObject.which);
    });

        // additional methods

    $('#data').on('click', function () {
     console.log($('#data').data('number', 52));
    });

    $('#detach').on('click', function () {
       $('#detach').detach();
    });

    $('#eq').on('click', function () {
        $('li button').eq(2).html('html');
        console.log($('#eq').hasClass('active'));
    });
    $('#index').on('click', function () {
        console.log($('#index').index('button'));
    });

    $('#on').on('click', function () {
        $('.buttons-list li').find('#off').text('click off before..').css('background', 'red');
    });
    $('#off').on('click', function () {
        $('#on').off('click');
    });
    $('#prop').on('click', function () {
        $('#prop').prop({
            disabled: true
        });
    });
    $('#remove').on('click', function () {
       $('.buttons-list li:nth-child(8)').remove();
    });

    $('#remove-attr').on('click', function () {
       $('#remove-attr').removeAttr('class');
    });

    $(window).resize(function() {
        console.log('the width of the window is :' + $(window).width());
    });

    $(window).scroll(function () {
       $('#scroll').css({'background' : 'red', 'padding' : '20px 30px'}).text('It`s Scroll!');
    });
    $('#scroll-top').on('click', function() {
        $('body').scrollTop(60);
    });
    $('#slide-up').on('click', function(){
        $('#slide-up').slideUp(800);
    });
    $('#slide-down').on('click', function(){
        $('#slide-up').slideDown(800);
    });
    $('#slide-toggle').on('click', function() {
        $('#slide-down').slideToggle();
    });

});


