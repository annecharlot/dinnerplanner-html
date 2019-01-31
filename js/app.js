$(function() {

	//* Views */

	var model = new DinnerModel();
	
	var mydinner = new Mydinner($("#Mydinner"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailView = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model);

	//* Controllers */

	var welcomecontroller = new WelcomeViewController(welcomeview, model, this);

	var backandeditcontroller = new BackandEditController(mydinner, model, this);

	var backtosearchcontroller = new BacktoSearchController(detailView, model, this);

	var confirmdinnercontroller = new ConfirmDinnerController(sidebar, model, this);

	var printfullrecipecontroller = new PrintFullRecipeController(ItemimgView, model, this);

	var itembuttoncontroller = new ItemButtonController(dishsearchview , model, this /** dishsearchview.dsh_id */);

	var searchbuttoncontroller = new SearchButtonController(dishsearchview, model, this);

	var addtomenucontroller = new AddToMenuController(detailView, model, this);

	var plusminuscontroller = new PlusMinusController(sidebar, model, this);

	//* general state controller */

	function hideallviews(){

	$("#Mydinner").hide();
	$("#itemView").hide();
	$("#ItemimgView").hide();
	$("#detailView").hide();
	$("#sidesbarview").hide();
	$("#WelcomeView").hide();
	$("#DishSearchView").hide();
	$("#selectdish").hide();
	$("#selectdishagain").hide();

	}

	this.showwelcomeview = function() {
		hideallviews();
		$("#WelcomeView").show();
	}

	this.selectdish = function(){
		hideallviews();
		$("#selectdish").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	this.selectdishagain = function(){
		hideallviews();
		$("#selectdishagain").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	this.dishdetails = function(){
		hideallviews();
		$("#detailView").show();
		$("#sidesbarview").show();
	}

	this.dinneroverview = function(){
		hideallviews();
		$("#Mydinner").show();
		$("#ItemimgView").show();
	}

	this.dinnerprintout = function(){
		hideallviews();
		$("#Mydinner").show();
		$("#itemView").show();
	}

this.showwelcomeview();

});