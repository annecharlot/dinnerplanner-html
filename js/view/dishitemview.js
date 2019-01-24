
var ItemView = function (container, model) {
	
	var fullitem = container.find("#fullitem");

	/** model.addDishToMenu(202);
	model.addDishToMenu(1);
	var menu = model.getFullMenu();
	for (dsh in menu) { kör} */
	
	var dsh = model.getDish(1);

	var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;

	var source= "<img src='" + img + "'style='outline: 1px solid black;'/>" ; 

	var item = "<div>" + source + "</div>";

	var text="<h3>" + dsh.name + "</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	
	var full = "<div class='col-xs-2 col-md-2' style='padding: 5px;'>" + source + "</div>"
	+ "<div class='col-xs-5 col-md-5'>" + text + "</div>"
	+ "<div class='col-xs-5 col-md-5'><h4>Preparation</h4>"
	+ "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	+ "</div><br/>";

	fullitem.html(full);

}
 
