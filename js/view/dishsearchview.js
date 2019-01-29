
var DishSearchView = function (container, model) {
	
	var dishsearch = container.find("#dishsearch");

	model.addDishToMenu(1);
	model.addDishToMenu(2);

	var full = "";
	var type = model.getSelectedDishTotal('starter');

	for(let dsh of type){
		
			var img = "images/" + dsh.image;
			full += "<div class='col-xs-12 col-md-2'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4></div>"; 
				      
			dishsearch.html(full);
		}

	}

 
