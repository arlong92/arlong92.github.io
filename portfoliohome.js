$(function() {
	$('#draggable').draggable();
	$('#draggable').disableSelection();
})

$('.col-md-6').hover(function() {
	$(this).resizable();
})

$('#reslink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.')
})

$('#pricelink').click(function() {
	alert('Thank you for viewing my project. Click the back button to return to my site.')
})