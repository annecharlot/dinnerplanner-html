
var SidebarView = function (container, model) {
	
	this.update = function(args) {

	if (args === "NumberOfGuests") {
		console.log("Hehehehe");
	}

	var sidebar = container.find("#sidebar");
	var guestnumber = container.find("#guestnumber");
	var minusbutton = container.find("#minusGuest");
	var plusbutton = container.find("#plusGuest");
	var confirmbutton = container.find("#confirm");

	var menu = model.getFullMenu();
	var total_price = model.getTotalMenuPrice(); 
	var number= model.getNumberOfGuests();

	guestnumber.html(number);
	
	var fullbar = "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'>Dish Name</div>"
	+ "<div class='col-xs-4 col-md-6'>Cost</div></div>"
	+ "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	
	if (menu.size != 0) {

		for(let dsh of menu){


			fullbar += "<div class='row' style='border: 1px solid black;'>"
			+ "<div class='col-xs-6 col-md-6'>" + dsh.title + "</div>"
			+ "<div class='col-xs-4 col-md-6'>" + Math.round(dsh.pricePerServing*number) + "</div>"
			+ "</div>";

		};

		fullbar += "<div class='row'>"
        + "<div class='col-xs-6 col-md-6'></div>"
        + "<div class='col-xs-4 col-md-6'>SEK " + total_price + "</div></div>";

		fullbar += "<hr class='divider'/>";
		sidebar.html(fullbar);
	}
	
	this.confirm = sidebar.find("#confirm");
	this.minusGuest = minusbutton;
	this.plusGuest = plusbutton;
	this.confirm = confirmbutton;

}

this.update();
model.addObserver(this);

	
}
 
