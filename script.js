// show a wiki search button for selected text
jQuery(function(){
    'use strict';

    var tooltip = jQuery('#selectionsearch__tooltip');
    if (!tooltip[0]) return;

    // mouseup callback for content div
    jQuery('#dokuwiki__content').mouseup(function(event){
        tooltip.hide();

        var query = window.getSelection().toString().trim();
        if (query.length < JSINFO.selectionsearch_minlength) return;

        var href = '?id='+JSINFO.id+'&do=search&q='+encodeURIComponent(query);
        jQuery('#selectionsearch__link').attr('href', href);

        tooltip.css({top: event.pageY+JSINFO.selectionsearch_ycorr,
                    left: event.pageX+JSINFO.selectionsearch_xcorr});
        tooltip.show();
    });     
});
