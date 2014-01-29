$(document).ready(function(){
	var add = $(".add");
	var checkoff = $(".checkoff");
	var input = $("#inputItem"); 
	var item = input.val(); //turn into a string
	var button = $("button");


	// Add an item to list
	input.keyup(function(event) {
    	if (event.keyCode === 13) {
    	button.click(); 
    	}
	})
	
	button.on("click", function(){
		var item = input.val();
		$("section").append("<div class='add'>" + "<input type='checkbox'>" + item + "</input" + "</div");
		
	});



});