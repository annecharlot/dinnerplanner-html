
var DishSearchView = function (container, model, app) {
	

	this.update = function(){

	var dishsearch = container.find("#dishsearch");

	var value = document.getElementById("myoption").value;
	var keyword = document.getElementById("keyword").value;

	if (keyword == "") {
		if (value == "All") {
		this.type = model.getAllDishesTotal();
		}

		else {
			//this.type = model.getAllDishes(value);
			model.getAllDishes(value).then(data => {
     		// do something with new dishes
     		this.type = data.results
			}).catch( error => {
     			// do something with the error 
			}); 
		}

	}

	else {
		//this.type = model.getAllDishes(value, keyword);
		model.getAllDishes(value, keyword).then(data => {
			this.type = data.results
     		// do something with new dishes
			}).catch( error => {
     			// do something with the error 
			});
	}
	
	dishsearch.html("");

	for(let dsh of this.type){
			
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


 
