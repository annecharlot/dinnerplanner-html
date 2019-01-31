var ItemButtonController = function(view,model, app /**, id = dsh.id som vi klicka på */) {
    view.itembutton.click(function(){
       //* model.getactivedish(), köra en model.find(id)?

       app.dishdetails();
    })
}