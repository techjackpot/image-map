function dateParseShort(date_string) {
    let cdate = new Date(date_string.replace('at',''));
    let cdate_string = ("0"+(cdate.getMonth()+1)).slice(-2) + '.' + ("0" + cdate.getDate()).slice(-2) + '.' + ("" + cdate.getFullYear()).slice(-2) + ' ' + ("0" + cdate.getHours()).slice(-2) + ":" + ("0" + cdate.getMinutes()).slice(-2) + ":" + ("0" + cdate.getSeconds()).slice(-2);
    return cdate_string;
}

jQuery(function() {
	$('.image').on('click', function(e) {

		$('.event_log').append('<p>' + dateParseShort(new Date().toString()) + ': ' + e.target.getAttribute('alt') + '</p>');
	})
})