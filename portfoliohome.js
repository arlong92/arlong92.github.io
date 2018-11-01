$(function() {
	$('#draggable').draggable();
	$('#draggable').disableSelection();
});

$('#resizable').hover(function() {
	$(this).resizable();
});