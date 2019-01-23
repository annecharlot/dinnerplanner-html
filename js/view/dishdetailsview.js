
var DetailView = function (container, model) {

	var ingredientlist = container.find("#ingredients");
	var item = container.find("#item");
	var numberguests = container.find("#numberOfGuests");

	var dsh = model.getDish(1);

	var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;

	var source= "<h2>" + dsh.name + "</h2>" + "<img src='" + img + "'style='outline: 1px solid black;'/>"; 

	model.setNumberOfGuests(3);
	var number = model.getNumberOfGuests();

	item.html(source);
	ingredientlist.html("Hello World!");
	numberguests.html(number);
	
}
 
