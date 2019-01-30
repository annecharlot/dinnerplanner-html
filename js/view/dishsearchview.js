
var DishSearchView = function (container, model) {
	
	this.update = function(){

	var dishsearch = container.find("#dishsearch");
	var searchfield = container.find("#searchfield");


	var full = "";
	var type = model.getSelectedDishTotal('starter');

	for(let dsh of type){
		
			var img = "images/" + dsh.image;
			full += "<div id='itembutton' class='col-xs-12 col-md-2'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4></div>"; 
				      
			dishsearch.html(full);
			this.itembutton = dishsearch.find("#itembutton");
		}

	var field = "<div class='row'><div class='col-xs-12 col-md-2'><input type='text' value='Enter Key Words'>"
	+ "</div><div class='col-xs-12 col-md-2'><select><option value='menu'>Starter</option>"
	+ "<option value='menu'>Main Course</option>"
	+ "<option value='menu'>Side Dish</option><option value='menu'>Dessert</option>"
	+ "<option value='menu'>Appetizer</option>"
	+ "<option value='menu'>...</option></select></div>"
	+ "<div class='col-xs-12 col-md-2'>"
	+ "<button id='searchbutton' class='btn' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);'>search</button>"
	+ "</div></div><hr class='divider' style='border: 1px solid black;'/>";
	
	searchfield.html(field);

	this.searchbutton = searchfield.find("#searchbutton");

}

this.update();
model.addObserver(this);

	}

 
