
var ItemImgView = function (container, model) {
	
	var dishimg = container.find("#dishitem");
	var dishprice = container.find("#dishprice");
	var menuprice = container.find("#totalmenuprice");
	
	var menu = model.getFullMenu();
	var number = model.getNumberOfGuests();

	var source="";
	var fullprice ="";
	var totalprice = 0;

	for (let dsh of menu) { 
  
		var list = dsh.ingredients;
		var price = 0;

		for (let ing of list) {
			price+= ing.price* number;
		};


		var img = "///Users/annecharlot/Documents/KTH/ÅK3/interaktionsprogrammering/GitHub/dinnerplanner-html/images/" + dsh.image;
		source += "<div class='col-xs-12 col-md-3'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4>" + price + " SEK</div>"; 

		totalprice += price;
		
	};

	dishimg.html(source);
	menuprice.html(totalprice);

}
 
