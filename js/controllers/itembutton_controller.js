var ItemButtonController = function(itembutton, id, app /**, id = dsh.id som vi klicka på */) {
    
    itembutton.addEventListener("click", function(){

       app.dishdetails(id);
       app.detailView.update();

    })
}