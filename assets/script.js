$(document).ready(function() {
    
    var gameObj = {

        charChosen : null, //Character chosen by user

        onCharSel : function(characterID){
            charClicked = $(characterID).attr("data-letter");
            if (charClicked === "A"){
                this.charChosen = "Pikachu";
                $("#charSel").attr("src","assets/Images/pikachu-Transparent.png");
            }
            else if (charClicked === "B"){
                this.charChosen = "Magikarp";
                $("#charSel").attr("src","assets/Images/Magikarp-Transparent.png");
            }
            else if (charClicked === "C"){
                this.charChosen = "Ampharos";
                $("#charSel").attr("src","assets/Images/Ampharos-Transparent.png");
            }
            else{
                this.charChosen = "Wooloo";
                $("#charSel").attr("src","assets/Images/Wooloo-Transparent.png");
            }
            $("#startBtn").removeClass("invisible");
            $("#chosenLbl").removeClass("invisible");
        },

        onEnmySel : function(characterID){
            charClicked = $(characterID).attr("data-letter");
            if (charClicked === "A"){
                this.charChosen = "Pikachu";
                $("#enmySel").attr("src","assets/Images/pikachu-Transparent.png");
            }
            else if (charClicked === "B"){
                this.charChosen = "Magikarp";
                $("#enmySel").attr("src","assets/Images/Magikarp-Transparent.png");
            }
            else if (charClicked === "C"){
                this.charChosen = "Ampharos";
                $("#enmySel").attr("src","assets/Images/Ampharos-Transparent.png");
            }
            else{
                this.charChosen = "Wooloo";
                $("#enmySel").attr("src","assets/Images/Wooloo-Transparent.png");
            }
        },
        onStart : function() {

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
        gameObj.onCharSel(this);
    });
    $(".enmyImg").on("click", function(){
        gameObj.onEnmySel(this);
    });
});
