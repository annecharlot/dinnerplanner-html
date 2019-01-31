
var DishSearchView = function (container, model) {
	
	this.update = function(){

	var dishsearch = container.find("#dishsearch");


	var full = "";
	var type = model.getSelectedDishTotal('starter');

	for(let dsh of type){
			
			var img = "images/" + dsh.image;
			full += "<div id='itembutton' class='col-xs-12 col-md-2'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4></div>"; 
				      
			dishsearch.html(full);
			var itembutton = dsh.id
			this.itembutton = dishsearch.find("#itembutton");
			//* this.itembutton = dishsearch.find("#dsh.id")
			//*this.dsh_id = dsh.id;
		}


	this.searchbutton = container.find("#searchbutton");

}

this.update();
model.addObserver(this);

	}

 
