
var ItemView = function (container, model) {

	var fullitem = container.find("#fullitem");
	
	model.addDishToMenu(202);
	model.addDishToMenu(1);

	var menu = model.getFullMenu();

	var full="";

	for (let dsh of menu) { 
		
		var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;

		var source= "<img src='" + img + "'style='outline: 1px solid black;'/>" ; 

		var text="<h3>" + dsh.name + "</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
		
		full += "<div class='row'><div class='col-xs-6 col-md-2' style='padding: 5px;'>" + source + "</div>"
		+ "<div class='col-xs-12 col-md-5'>" + text + "</div>"
		+ "<div class='col-xs-12 col-md-5'><h4>Preparation</h4>"
		+ "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		+ "</div><br/></div>";
		
	};
	fullitem.html(full);
}
 
