
var DetailView = function (container, model) {

	this.id = 1;



	this.choosedish = function(idx) {
		this.id = idx;	
}

	this.update = function(){

	var ingredientlist = container.find("#ingredients");
	var item = container.find("#item");
	var totalprice = container.find("#totalprice");
	var guests = container.find("#number");
	var addmenubutton = container.find("#addbutton");

	this.backtosearch = container.find("#backtosearch");
	
	//var dsh = model.getDish(this.id);

	model.getDish(this.id).then(data => {
		// do something with new dishes
		var dsh = data.results;

		var img = "https://spoonacular.com/recipeImages/" + dsh.image;

		var source= "<h2>" + dsh.name + "</h2>" + "<img src='" + img + "'style='outline: 1px solid black;'/>"
		+ "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";

	    item.html(source);
	    

		var list = dsh.ingredients;

		var div = "";
		var price = 0;

		var number = model.getNumberOfGuests();

		for (let ing of list) {
			div += "<div class='row'><div class='col-md-4 col-xs-4'>" + Math.round(ing.quantity*number) + " " + ing.unit + "</div>"
		+ "<div class='col-md-4 col-xs-4'>" + ing.name + "</div>"
		+ "<div class='col-md-4 col-xs-4'>SEK "
		+ ing.price*number + ".00</div></div>";

		ingredientlist.html(div);

		price+= ing.price* number;

		};

		totalprice.html(price);
		guests.html(number);

	    
	    this.dsh_id = dsh.id;


     	
	}).catch( error => {
     	// do something with the error
	}); 

	this.addbutton = container.find("#add")


}

this.update();
model.addObserver(this);

}
 
