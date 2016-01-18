'use strict';

var socket = io.connect();

var $canvas = $('.canvas');
var $color  = $('#color');
var $clear  = $('#clear');

var width  = parseInt($canvas.attr('data-width'));
var height = parseInt($canvas.attr('data-height'));

for (var i = 0; i < width * height; i++) {
  $canvas.append('<div class="block" data-index="' + i + '"><div/>');
}

$('*').bind('dragstart', function() {
	return false;
});

$('.block').on('mousemove', function(e) {
	var color = $color.val();
  $(this).css('backgroundColor', color);
	socket.emit('draw', { index: $(this).attr('data-index'), color: color, event: e.type });
});

$clear.on('click', function() {
	$('.block').css('backgroundColor', '');
	socket.emit('clear');
});
