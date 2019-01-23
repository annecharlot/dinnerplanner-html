
var ItemImgView = function (container, model) {
	
	var dishimg = container.find("#dishitem");

	/** model.addDishToMenu(202);
	model.addDishToMenu(1);
	var menu = model.getFullMenu();
	for (dsh in menu) { dishimg.html(dsh.image); dishname.html(dsh.name);} */
	
	var dsh = model.getDish(1);

	var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;

	var source= "<img src='" + img + "'style='outline: 1px solid black;'/>" + "<p>" + dsh.name + "</p>"; 

	dishimg.html(source);

}
 
