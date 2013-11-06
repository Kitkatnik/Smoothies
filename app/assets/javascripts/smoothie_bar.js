// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

var ingredients = {};

$(function() {
	var info = $("#info");
	
	var jettyJunior = ["Banana","Banana","Strawberry","Strawberry","Ice-Beige","Ice-Beige","Water","Water","Water"].sort();
	
	function addIngredients(ingred) {
		var ingredId = ingred.attr("data-ingred-id");

		if(ingredients.hasOwnProperty(ingredId)) {
			alert("Already in the blender");
		} else {
			ingredients[ingredId] = ingred.attr("data-ingred-name");
			info.append(ingredients[ingredId]);
		}
	}

	function arrayEquals(a,b) {
		return !(a<b || b<a);
	}

	function checkIngredients() {
		var ingredNames = [];
		$.each(ingredients,function(ingredId,ingredName){
			ingredNames.push(ingredName);
		})
	
		console.log(ingredNames.sort(),jettyJunior)

		if(arrayEquals(ingredNames.sort(),jettyJunior)) {
			alert("You are awesome :D");
		}
	}

	$( ".ingredients li" ).draggable({
		snap: true
	});
	$( "#blender" ).droppable({
		drop: function(e,ui) {
			var ingred = $(ui.draggable).find("img"); // this is the image within the draggable li

			addIngredients(ingred);
			checkIngredients();
		}
	});
})

