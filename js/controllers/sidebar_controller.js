var SideBarController = function(view,model, app) {
    
	view.plusGuest.click(function(){
       model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    })

    view.minusGuest.click(function() {
    	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    })


    view.confirm.click(function(){
       app.dinneroverview();
    })
}