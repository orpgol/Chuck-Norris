$("img").click( function(event){
    event.preventDefault();
    if ($(this).hasClass("chuck") ) {
        $(this).animate({marginTop:"0px"}, 200);          
        $(this).removeClass("chuck");
    } else {
        $(this).animate({marginTop:"-100px"}, 200);   
        $(this).addClass("chuck");
        this.src = "http://cdn.lotoflaughters.com/wp-content/uploads/2013/10/Chuck-Norris-01.jpg";
    }
    return false;
});