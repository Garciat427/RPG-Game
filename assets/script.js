$(document).ready(function() {
    
    var gameObj = {

        charChosen : null,  //Character chosen by user
        charHP : null,      //Character HP
        enmyChosen : null,  //Current Enmy
        enmyHP: null,       //EnmyHP

        //Character Objs
        pikachu : {
            hp : 120,
            attackInt : 8,
            dmg : null
        },
        magikarp : {
            hp : 180,
            attackInt : 8,
            dmg : null
        },
        ampharos : {
            hp : 150,
            attackInt : 8,
            dmg : null
        },
        wooloo : {
            hp : 100,
            attackInt : 8,
            dmg : null
        },


        onCharSel : function(characterID){
            charClicked = $(characterID).attr("data-letter");
            
            if (charClicked === "A"){
                this.charChosen = "Pikachu";
                $("#charSel1").attr("src","assets/Images/pikachu-Transparent.png");
                $("#charSel2").attr("src","assets/Images/pikachu-Transparent.png");

            }
            else if (charClicked === "B"){
                this.charChosen = "Magikarp";
                $("#charSel1").attr("src","assets/Images/Magikarp-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Magikarp-Transparent.png");
            }
            else if (charClicked === "C"){
                this.charChosen = "Ampharos";
                $("#charSel1").attr("src","assets/Images/Ampharos-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Ampharos-Transparent.png");
            }
            else{
                this.charChosen = "Wooloo";
                $("#charSel1").attr("src","assets/Images/Wooloo-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Wooloo-Transparent.png");
            }
            $("#startBtn").removeClass("invisible");
            $("#chosenLbl").removeClass("invisible");
        },

        onEnmySel : function(characterID){
            var enmyClicked = $(characterID).attr("data-letter");
            

            if (enmyClicked === "A"){
                this.enmyChosen = "Pikachu";
                $("#enmySel").attr("src","assets/Images/pikachu-Transparent.png");
            }
            else if (enmyClicked === "B"){
                this.enmyChosen = "Magikarp";
                $("#enmySel").attr("src","assets/Images/Magikarp-Transparent.png");
            }
            else if (enmyClicked === "C"){
                this.enmyChosen = "Ampharos";
                $("#enmySel").attr("src","assets/Images/Ampharos-Transparent.png");
            }
            else{
                this.enmyChosen = "Wooloo";
                $("#enmySel").attr("src","assets/Images/Wooloo-Transparent.png");
            }
        },
        onStart : function() {
            console.log(this.charChosen)
            if (this.charChosen === "Pikachu"){
                $("#enmyA").remove();
            }
            else if (this.charChosen === "Magikarp"){
                $("#enmyB").remove();
            }
            else if (this.charChosen === "Ampharos"){
                $("#enmyC").remove();
            }
            else{
                $("#enmyD").remove();
            }

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
    $("#startBtn").on("click", function(){
        gameObj.onStart();
    });
});
