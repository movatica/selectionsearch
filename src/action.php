<?php
if (!defined('DOKU_INC')) die();

class action_plugin_selectionsearch extends DokuWiki_Action_Plugin
{
    const VALID_ACTIONS = ['show', 'search']; // TODO: make this configurable

    public function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('DOKUWIKI_STARTED', 'AFTER',  $this, 'publish_configuration');
        $controller->register_hook('TPL_CONTENT_DISPLAY', 'BEFORE', $this, 'inject_tooltip_html');
    }
	
	public function publish_configuration(Doku_Event $event, $param)
	{
		global $JSINFO;
		$JSINFO['selectionsearch_minlength'] = $this->getConf('min_query_length');
		$JSINFO['selectionsearch_xcorr'] = $this->getConf('x_correction');
		$JSINFO['selectionsearch_ycorr'] = $this->getConf('y_correction');
	}

    public function inject_tooltip_html(Doku_Event $event, $param)
    {
        global $ACT;

        if (!in_array($ACT, self::VALID_ACTIONS)) return;

        // insert tooltip template
        $event->data .= '<div id="selectionsearch__tooltip">';
        $event->data .= '<a id="selectionsearch__link" target="_blank" href="">';
        $event->data .= '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIXRSTlMHNEEkTD4WPVEtKzcMQ1NATkc4VFJGHDEhJ0Q6RS8uVQBDAjEGAAAAXklEQVR4AS3HVQ4CUQDF0MHdGZfe/a+SNLz+NKeKNSnJCTj2Sn55rl9w+XNiTNLfaWRFHZsZ5cYZtew4xK7cZD7EBmaZFdtz9gO0MtlRWmTSvafH3GpZOulCWwBpxT/nGxX5oR8AJgAAAABJRU5ErkJggg==" alt="search">';
        $event->data .= '</a>';
        $event->data .= '</div>';
    }
}
?>