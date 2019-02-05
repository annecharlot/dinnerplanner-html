
var DishSearchView = function (container, model, app) {
	

	this.update = function(){

	var dishsearch = container.find("#dishsearch");

	var type = model.getAllDishesTotal();

	for(let dsh of type){
			
			var img = "images/" + dsh.image;
			item = "<div id='" + dsh.id + "' class='col-xs-12 col-md-2'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4></div>"; 
				      
			dishsearch.append(item);

			let itembutton = dishsearch.find("#" + dsh.id)[0];

			new ItemButtonController(itembutton, dsh.id, app);

		}


	this.searchbutton = container.find("#searchbutton");

}

this.update();
model.addObserver(this);

	}


 
