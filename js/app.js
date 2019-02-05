$(function() {

	//* Views */

	var model = new DinnerModel();
	
	var mydinner = new Mydinner($("#Mydinner"), model);

	var itemView = new ItemView($("#itemView"), model);

	var ItemimgView = new ItemImgView($("#ItemimgView"), model);

	var detailView = new DetailView($("#detailView"), model);

	var sidebar = new SidebarView($("#sidesbarview"), model);

	var welcomeview = new WelcomeView($("#WelcomeView"), model);

	var dishsearchview = new DishSearchView($("#DishSearchView"), model, this);

	//* Controllers */

	var welcomecontroller = new WelcomeViewController(welcomeview, model, this);

	var backandeditcontroller = new BackandEditController(mydinner, model, this);

	var backtosearchcontroller = new BacktoSearchController(detailView, model, this);

	var sidebarcontroller = new SideBarController(sidebar, model, this);

	var printfullrecipecontroller = new PrintFullRecipeController(ItemimgView, model, this);

	var searchbuttoncontroller = new SearchButtonController(dishsearchview, model, this);

	var addtomenucontroller = new AddToMenuController(detailView, model, this);


	//* general state controller */

	this.hideallviews = function(){

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
		this.hideallviews();
		$("#WelcomeView").show();
	}

	this.selectdish = function(){
		this.hideallviews();
		$("#selectdish").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	this.selectdishagain = function(){
		this.hideallviews();
		$("#selectdishagain").show();
		$("#sidesbarview").show();
		$("#DishSearchView").show();
	}

	this.dishdetails = function(id){
		this.hideallviews();
		detailView.update(id);
		$("#detailView").show();
		$("#sidesbarview").show();
	}

	this.dinneroverview = function(){
		this.hideallviews();
		$("#Mydinner").show();
		$("#ItemimgView").show();
	}

	this.dinnerprintout = function(){
		this.hideallviews();
		$("#Mydinner").show();
		$("#itemView").show();
	}

this.showwelcomeview();

});