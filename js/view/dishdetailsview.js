
var DetailView = function (container, model) {

	var ingredientlist = container.find("#ingredients");
	var item = container.find("#item");
	var totalprice = container.find("#totalprice");
	
	var dsh = model.getDish(1);

	var img = "images/" + dsh.image;

	var source= "<h2>" + dsh.name + "</h2>" + "<img src='" + img + "'style='outline: 1px solid black;'/>"
	+ "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"
    + "<button class='btn' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);''>"
    + "back to search</button>"
    + "<h3>Preparation</h3>"
    + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>";

    item.html(source);

	var list = dsh.ingredients;

	var div = "";
	var price = 0;

	var number = model.getNumberOfGuests();

	for (let ing of list) {
		div += "<div class='row'><div class='col-md-4 col-xs-4'>" + ing.quantity*number + " " + ing.unit + "</div>"
	+ "<div class='col-md-4 col-xs-4'>" + ing.name + "</div>"
	+ "<div class='col-md-4 col-xs-4'>SEK "
	+ ing.price*number + ".00</div></div>";

	ingredientlist.html(div);

	price+= ing.price* number;

	};

	totalprice.html(price);
		

}
 
