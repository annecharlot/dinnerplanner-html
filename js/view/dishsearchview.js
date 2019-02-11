
var DishSearchView = function (container, model, app) {
	

	this.update = function(){

	var dishsearch = container.find("#dishsearch");
	var loader = container.find("#loader");
	var errormessage = container.find("#error");

	var value = document.getElementById("myoption").value;
	var keyword = document.getElementById("keyword").value;

	dishsearch.html("");
	loader.show();
	errormessage.hide();

//** ändra filter=="" i model och ha hela for loopen i getalldishes.then...

	if (keyword == "") {
		if (value == "All") {
		this.type = model.getAllDishesTotal();
		}

		else {
			model.getAllDishes(value).then(data => {
     		this.type = data.results
			}).catch( error => {
     			dishsearch.html("");
     			errormessage.show();
			}); 
		}

	}

	else {
		
		model.getAllDishes(value, keyword).then(data => {
			this.type = data.results;
			}).catch( error => {
     			dishsearch.html("");
     			errormessage.show();
			});
	}
	

	dishsearch.html("");

	for(let dsh of this.type){
			
			var img = "https://spoonacular.com/recipeImages/" + dsh.image;
			item = "<div id='" + dsh.id + "' class='col-xs-12 col-md-2'><img src='" + img + "' height='200' width='200' style='outline: 1px solid black;'/>" + "<h4>" + dsh.title + "</h4></div>"; 
				      
			dishsearch.append(item);

			let itembutton = dishsearch.find("#" + dsh.id)[0];

			new ItemButtonController(itembutton, dsh.id, app);

		}


	loader.hide();
	this.searchbutton = container.find("#searchbutton");

}

this.update();
model.addObserver(this);

	}


 
