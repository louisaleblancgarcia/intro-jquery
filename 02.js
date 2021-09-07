
$(() => {
    $('#selected-plays > li')
        .addClass('horizontal');

    $('#selected-plays li:not(.horizontal)')
        .addClass('sub-level');
    $('#selected-plays li:not(.sub-level)')
        .addClass('big-letter');

    $('a[href^="mailto:"]')
        .addClass('mailto');
    $('a[href$=".pdf"]')
        .addClass('pdflink');
    $('a[href^="http"][href*="henry"]')
        .addClass('henrylink');

    $('td:eq(2)').css('color', 'red');

    $('tr:even').addClass('alt');

    $('tr').filter(':odd').addClass('alt');
    $('td:contains(Henry)')
        .next()
        .addClass('highlight');

    const eachText = []
    $('td')
        .each((i, gato) => {
            //console.log(`${i}`);
            if (gato.textContent.startsWith('H')) {
                eachText.push(gato.textContent);
            }
        })
    //console.log('each', eachText);

    $('td')
        .each((i, td) => {
            if (td.textContent.startsWith('16')) {
                td.setAttribute('class', 'year-1600');
            } else if (td.textContent.startsWith('15')) {
                td.setAttribute('class', 'year-1500');
            }
        })
});