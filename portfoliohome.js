$(function() {
	$('#draggable').draggable();
	$('#draggable').disableSelection();
})

$('.col-md-6').hover(function() {
	$(this).resizable();
})

$('#link').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.')
})