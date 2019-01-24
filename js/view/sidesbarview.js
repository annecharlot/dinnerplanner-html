
var SidebarView = function (container, model) {
	
	var sidebar = container.find("#sidebar");

	/** var menu = model.getFullMenu();
	var total_price = model.getTotalMenuPrice(); 
	if menu != NONE: lägg till, annars kör fullbar*/

	var number= model.getNumberOfGuests();

	var fullbar = "<h3>My Dinner</h3>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'>"
	+ "People</div><div class='col-xs-6 col-md-6'>"
	+ "<select>"
	+ "<option value='number'>" + number + "</option>"
	+ "<option value='number'>" + (number+1) + "</option>"
	+ "<option value='number'>" + (number+2) + "</option>"
	+ "<option value='number'>...</option>"
	+ "</select></div></div>"
	+ "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'>Dish Name</div>"
	+ "<div class='col-xs-4 col-md-6'>Cost</div></div>"
	+ "<hr class='divider' style='border-bottom: 1px solid black;'/>"
	+ "<div class='row'><div class='col-xs-6 col-md-6'></div>"
	+ "<div class='col-xs-4 col-md-6'>SEK 00.00</div></div>"
	+ "<hr class='divider'/><button>Confirm Dinner</button>";

	sidebar.html(fullbar);
}
 
