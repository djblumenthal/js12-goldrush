$(document).on('ready', function() {
  
  $('#container').on('click',function(e){
	$(this).append("<div class='marker' style='top:" +e.pageY + "px; left:" + e.pageX + "px'>x</div>");
  });
 });
