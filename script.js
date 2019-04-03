// show a wiki search button for selected text
jQuery(function(){
    'use strict';

    // only run in show and search mode
	// TODO: make this configurable
    if (JSINFO['ACT'] != 'show' && JSINFO['ACT'] != 'search') return;
    
    // mouseup callback for content div
    jQuery('div#dokuwiki__content').mouseup(function(event){
        var query = window.getSelection().toString().trim();

        var tooltip = jQuery('div#selectionsearch__tooltip');
        tooltip.hide();

        if (query.length < JSINFO['selectionsearch_minlength']) return;

        var href = '?id='+JSINFO['id']+'&do=search&q='+encodeURIComponent(query);
        jQuery('a#selectionsearch__link').attr('href', href);
		
        tooltip.css({top: event.pageY+JSINFO['selectionsearch_ycorr'],
		            left: event.pageX+JSINFO['selectionsearch_xcorr']});
        tooltip.show();
    });     
});