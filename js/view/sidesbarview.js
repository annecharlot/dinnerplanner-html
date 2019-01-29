
var SidebarView = function (container, model) {
	
	var sidebar = container.find("#sidebar");

	/** 
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
		

	model.removeDishFromMenu(1);
	model.removeDishFromMenu(202);*/

	var menu = model.getFullMenu();
	var total_price = model.getTotalMenuPrice(); 
	var number= model.getNumberOfGuests();
	
	var fullbar = "<div class='collapse in' id='toggle'><h3>My Dinner</h3>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'>"
	+ "People</div><div class='col-xs-6 col-md-6'>"
	+ "<input type='number' value='" + number + "' style='width: 40px;'></input></div></div>"
	+ "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'>Dish Name</div>"
	+ "<div class='col-xs-4 col-md-6'>Cost</div></div>"
	+ "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	
	if (menu.size != 0) {

		for(let dsh of menu){

			var list = dsh.ingredients;
			var price = 0;

			for (let ing of list) {
				price+= ing.price* number;
			};

			fullbar += "<div class='row' style='border: 1px solid black;'>"
			+ "<div class='col-xs-6 col-md-6'>" + dsh.name + "</div>"
			+ "<div class='col-xs-4 col-md-6'>" + price + "</div>"
			+ "</div>";

		};

		fullbar += "<div class='row'>"
        + "<div class='col-xs-6 col-md-6'></div>"
        + "<div class='col-xs-4 col-md-6'>SEK " + total_price + "</div></div>";

		fullbar += "<hr class='divider'/><button id='confirm' class='btn' style='background-color: rgba(244, 179, 80, 1);"
		+ "border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);''>Confirm Dinner</button></div>";
		sidebar.html(fullbar);
	}
	

	
}
 
