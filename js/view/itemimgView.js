
var ItemImgView = function (container, model) {
	
	this.update = function(){

	var dishimg = container.find("#dishitem");
	var dishprice = container.find("#dishprice");
	var menuprice = container.find("#totalmenuprice");
	var printbutton = container.find("#printbutton");
	
	var menu = model.getFullMenu();
	var number = model.getNumberOfGuests();

	var source="";
	var fullprice ="";
	var totalprice = model.getTotalMenuPrice();

	for (let dsh of menu) { 
  
		var list = dsh.ingredients;
		var price = 0;

		for (let ing of list) {
			price+= ing.price* number;
		};

		var img = "images/" + dsh.image;
		source += "<div class='col-xs-12 col-md-3'><img src='" + img + "'style='outline: 1px solid black;'/>" + "<h4>" + dsh.name + "</h4>" + price + " SEK</div>"; 
		
	};

	dishimg.html(source);
	menuprice.html(totalprice);
	
	var button = "<button id='print' class='btn' style='background-color: rgba(244, 179, 80, 1); border: black; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);'>"
        + "Print Full Recipe</button>";

    printbutton.html(button);

	this.print = printbutton.find("#print");

}

this.update();
model.addObserver(this);

}
 
