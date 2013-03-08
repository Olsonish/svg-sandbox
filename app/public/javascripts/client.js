$(document).ready(function () {
	
	// Google Web Font Support
	WebFontConfig = {
		google: { families: ['Ubuntu:300,500,300italic,500italic', 'Ubuntu+Condensed::latin']}
	};
	(function() {
	    var wf = document.createElement('script');
	    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	    wf.type = 'text/javascript';
	    wf.async = 'true';
	    var s = document.getElementsByTagName('script')[0];
	    s.parentNode.insertBefore(wf, s);
  	})();
	
});