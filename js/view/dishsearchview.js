
var DishSearchView = function (container, model) {
	
	/** 
var SearchView = function(container, model, app){  lägg till "this" som parameter i app.js när du skapar searchviewn?
this.dishItems = []; -> inte nödvändig?

this.update = function() {
searchResults = model.getAllDishes(type,filter);
for(var key in searchResults) {
var dishItem = $('create HTML for dish');
new DishItemController(dishItem, searchResults[key], app);  
+ htmla ut det i dishsearch?    
}  
}}

// dishItemController.js 
var DishItemController = function(item, dish, app) {  
item.click(function()
{      
app.showDishDetails(dish.id);  lägg alltså till parameter i dishdetailsviewn!
})}*/

	this.update = function(){

	var dishsearch = container.find("#dishsearch");


	var full = "";
	var type = model.getSelectedDishTotal('starter');

	for(let dsh of type){
			
			var img = "images/" + dsh.image;
			full += "<div id='itembutton' class='col-xs-12 col-md-2'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4></div>"; 
				      
			dishsearch.html(full);
			this.itembutton = dishsearch.find("#itembutton");
			//* this.itembutton = dishsearch.find("#dsh.id")
			//*this.dsh_id = dsh.id; 
			//*skicka den till model.setactivedish(dsh.id);
		}


	this.searchbutton = container.find("#searchbutton");

}

this.update();
model.addObserver(this);

	}


 
