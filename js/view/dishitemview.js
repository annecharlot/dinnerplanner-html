
var ItemView = function (container, model) {
	
	var dishimg = container.find("#dishimg");
	var dishimg2 = container.find("#dishimg2");
	var dishname = container.find("#dishname");
	var dishname2 = container.find("#dishname2");

	/** model.addDishToMenu(202);
	model.addDishToMenu(1);
	var menu = model.getFullMenu();
	for (dsh in menu) { dishimg.html(dsh.image); dishname.html(dsh.name);} */
	
	var dsh = model.getDish(1);
	var dsh2 = model.getDish(202);

	var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;
	var img2 = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh2.image;

	var source= "<img src='" + img + "'style='outline: 1px solid black;'/>" ; 
	var source2= "<img src='" + img2 + "' style='outline: 1px solid black;'/>" ; 

	var item = "<div>" + source + "</div>";

	var text="<h3>" + dsh.name + "</h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	dishimg.html(item);
	dishimg2.html(source2);
	dishname.html(text);
	dishname2.html(dsh2.name);

}
 
