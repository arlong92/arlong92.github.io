$(function() {
	$('#draggable').draggable();
	$('#draggable').disableSelection();
});

$('#resizable').hover(function() {
	$(this).resizable()
});

$('#reslink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.')
});

$('#pricelink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.')
});

$('img').hover(function() {
	$(this).toggle('bounce', {times: 3}, 'slow');
});