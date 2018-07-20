$(function() {
	$('#draggable').draggable();
	$('#draggable').disableSelection();
});

$('#resizable').hover(function() {
	$(this).resizable();
});

$('#reslink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.');
});

$('#pricelink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.');
});

$('#picture').click(function() {
	$(this).animate('bounce', {times: 2}, 'slow');
});

$('#picture2').click(function() {
	$(this).animate('bounce', {times: 2}, 'slow');
});