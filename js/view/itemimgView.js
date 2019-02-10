
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
  		
		source += "<div class='col-xs-12 col-md-3'><img src='" + dsh.image + "' height='200' width='200' style='outline: 1px solid black;'/>" + "<h4>" + dsh.title + "</h4>" + Math.round(dsh.pricePerServing*number) + " SEK</div>"; 
		
	};

	dishimg.html(source);
	menuprice.html(totalprice);

	this.print = container.find("#print");

}

this.update();
model.addObserver(this);

}
 
