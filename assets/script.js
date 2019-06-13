$(document).ready(function() {
    
    var gameObj = {

        onClickChar : function(charClicked){
            charClicked = $(charClicked).attr("data-letter");

            console.log(charClicked);
        }
    }
    
    
    
    //Listners
    $( ".charImg" ).hover(function () {
        $(this).css("background","green");
    },
    function () {
        $(this).css("background","");
    });
    $(".charImg").on("click", function(){
        gameObj.onClickChar(this);
    });
});
