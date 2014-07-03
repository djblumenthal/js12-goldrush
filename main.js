$(document).on('ready', function() {
  
  $('body').on('click', '#container', function(e){
  	console.log('Adding marker');
	var marker = $('<div class="marker">').css({
		'color': 'red',
		'position': 'absolute',
		'top': e.pageY-30,
		'left': e.pageX-25,
		'font-size': '36px',
		'background-color': 'rgba(0,0,0,0)',
		'z-index': '1',

	}).text('X');
	$(this).append(marker);


  });
  $()

  	$('body').on('click', '.marker', function(e) {
  		console.log("removing marker");

  		 $(this).remove();
  		 e.stopPropagation();

  	});

 });