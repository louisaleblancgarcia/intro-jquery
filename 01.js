$(() => {
    $('div.poem-stanza').addClass('highlight');
    $('.author').addClass('highlight');
    //encadenamiento
    $('p').css('color','red').css('background-color','yellow').slideUp(5000).slideDown(5000);

    $('tr:even').addClass('alt');
   });