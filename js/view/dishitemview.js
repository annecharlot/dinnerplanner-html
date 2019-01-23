
var ItemView = function (container, model) {
	
	var dishimg = container.find("#dishitem");
	var dishimg2 = container.find("#dishitem2");
	var dishname = container.find("#dishname");
	var dishname2 = container.find("#dishname2");
	console.log(dishname);

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

	var item = "<div>" + source + dsh.name + "</div>";

	dishimg.html(item);
	dishimg2.html(source2);
	dishname.html(dsh.name);
	dishname2.html(dsh2.name);

}
 
