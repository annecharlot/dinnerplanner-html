var SearchButtonController = function(view,model, app) {
    view.searchbutton.click(function(){
       view.update();
       app.selectdishagain();
    })
}