// show a wiki search button for selected text
jQuery(function(){
    'use strict';

    const tooltip = jQuery('#selectionsearch__tooltip');
    if (!tooltip[0]) return;

    // mouseup callback for content div
    jQuery('#dokuwiki__content').mouseup(function(event){
        tooltip.hide();

        const query = window.getSelection().toString().trim();
        if (query.length < JSINFO.selectionsearch_minlength) return;

        const href = '?' + jQuery.param({ id: JSINFO.id, do: 'search', q: query });
        jQuery('#selectionsearch__link').attr('href', href);

        tooltip.css({top: event.pageY+JSINFO.selectionsearch_ycorr,
                    left: event.pageX+JSINFO.selectionsearch_xcorr});
        tooltip.show();
    });     
});
