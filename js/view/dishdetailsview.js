
var DetailView = function (container, model) {

	var ingredientlist = container.find("#ingredients");
	var item = container.find("#item");
	
	var dsh = model.getDish(1);

	var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;

	var source= "<h2>" + dsh.name + "</h2>" + "<img src='" + img + "'style='outline: 1px solid black;'/>"
	+ "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
    + "<button class='btn' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);''>"
    + "back to search</button>"
    + "<h3>Preparation</h3>"
    + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>";

    item.html(source);

	var list = dsh.ingredients;

	var div = "";

	for (let ing of list) {
		div += "<div class='row'><div class='col-md-3 col-xs-4'>" + ing.quantity + " " + ing.unit + "</div>"
	+ "<div class='col-md-3 col-xs-4'>" + ing.name + "</div><div class='col-md-2 col-xs-4'>SEK</div>"
	+ "<div class='col-md-2 col-xs-4'>"
	+ ing.price + ".00</div></div>";

	ingredientlist.html(div);

	};

}
 
