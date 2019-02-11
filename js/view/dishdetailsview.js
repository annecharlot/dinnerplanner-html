
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
	var preparation = container.find("#preparation");
	var loader = container.find("#loader");
	var errormessage = container.find("#error");

	this.backtosearch = container.find("#backtosearch");
	
	//var dsh = model.getDish(this.id);

	loader.show();
	errormessage.hide();

	model.getDish(this.id).then(data => {
		// do something with new dishes
		
		var dsh = data;

		var source= "<h2>" + dsh.title + "</h2>" + "<img src='" + dsh.image + "'style='outline: 1px solid black;'/>";

	    item.html(source);
	    

		var list = dsh.extendedIngredients;

		var div = "";
		var price = 0;

		var number = model.getNumberOfGuests();

		for (let ing of list) {
			div += "<div class='row'><div class='col-md-4 col-xs-4'>" + Math.round(ing.measures.metric.amount*number) + " " + ing.measures.metric.unitShort + "</div>"
		+ "<div class='col-md-4 col-xs-4'>" + ing.originalName + "</div>"
		+ "<div class='col-md-4 col-xs-4'>SEK "
		+ number + ".00</div></div>";

		ingredientlist.html(div);


		};

		totalprice.html(Math.round(dsh.pricePerServing*number));
		guests.html(number);


	   	var Preparation = "<h3>Preparation</h3>"
	   	+ dsh.instructions;

	   	preparation.html(Preparation);

	   	this.dsh_id = dsh.id;

     	
	}).catch( error => {
     	//item.html("loading...")// do something with the error
     	item.html("");
     	ingredientlist.html("");
     	preparation.html("");
     	errormessage.show();
	}); 

	loader.hide();

	this.addbutton = container.find("#add")


}

this.update();
model.addObserver(this);

}
 
