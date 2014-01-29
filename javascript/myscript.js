$(document).ready(function(){
	// Show Instructions
	$("header").hover(function(){
		$("#newtext").show();
		},function(){
			$("#newtext").hide();
	});

	var add = $(".add");
	var checkoff = $(".checkoff");
	var input = $("#inputItem"); 
	var item = input.val(); 
	var list = $("#list");
	var button = $("button");


	// Add an item to list with enter
	input.keyup(function(event) {
    	if (event.keyCode === 13) {
    	button.click(); 
    	}
	})
	// Add item by clicking add button 
	button.on("click", function(){
		var item = input.val();
		if (item === '') {
			return false;
		} else {
		list.append("<div id='listItem' class='add'>" + "<input type='checkbox'>" + item + "</input" + "</div");
		input.val('').focus();
		}
	});
	// Strikethrough item when checked
	list.on("click", "input:checkbox", function(){
		$(this).closest("div").toggleClass("checkoff");
		input.val('').focus();
	});
	// Remove Item from list
	list.on("dblclick", "#listItem", function(){
		$(this).closest("div").fadeOut(800);
		input.val('').focus();
	});

});
	
	
	// var strikeThrough = function() {
	// 	var input = $("#inputItem"); 
	// 	var item = input.val();
	// 	var n = $("<div class='add'>" + "<input type='checkbox'>" + item + "</input" + "</div");
	// 	$("div input:checkbox").removeClass(add).addClass(checkoff);
	// 	};
		
	// 	strikeThrough();
 
	// $("input:checkbox").on( "click", strikeThrough);

	// +++++++++++++

	// var check = $("input:checked");
	// $("section").live("strikeThrough", function(){
	// 	$(this).addClass(checkoff); 
	// });
	// check.click(function(){
	// 	$("section").trigger("strikeThrough"); 

	// check.on("click", function(){
	// 		$(this).addClass(checkoff); 

	// +++++++++++++

	// var check =  $("input type='checkbox'"); 
	// var item = input.val();
	// check.live("click", function(){
	// 		$("this").addClass(checkoff);
	// 	}
	// );

	// +++++++++++++

	// check.on("click", check, function(){
	// 	item.addClass(checkoff);
	// })


