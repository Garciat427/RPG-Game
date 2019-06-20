$(document).ready(function() {
    var gameObj = {

        playerChosen : null,            //Character chosen by user
        playerHP : null,                //Character HP
        playerHPBar : $("#playerHP"),   //Character HP Bar
        enemyChosen : null,             //Current Enemy
        enemyHP: null,                  //Enemy HP
        enemyHPBar : $("#enemyHP"),     //Enemy HP Bar
        dmgSel : null,                  //Sel correct Dmg Set

        //Character Objs
        wooloo : {
            hp : 100,
            attackInt :8,
            dmg : [8,5,5,5]
        },
        pikachu : {
            hp : 120,
            attackInt : 8,
            dmg : [5,8,25,30]
        },
        ampharos : {
            hp : 150,
            attackInt : 8,
            dmg : [15,20,8,35]
        },
        magikarp : {
            hp : 180,
            attackInt : 8,
            dmg : [20,25,30,8]
        },


        onCharSel : function(characterID){
            charClicked = $(characterID).attr("data-letter");
            $("#charSel1").css({ opacity : 0 });
            
            if (charClicked === "A"){
                this.dmgSel = 1;
                this.playerChosen = this.pikachu; //Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/pikachu-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/pikachu-Transparent.png");
            }
            else if (charClicked === "B"){
                this.dmgSel = 3;
                this.playerChosen = this.magikarp;//Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/Magikarp-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/Magikarp-Transparent.png");
            }
            else if (charClicked === "C"){
                this.dmgSel = 2;
                this.playerChosen = this.ampharos;//Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/Ampharos-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/Ampharos-Transparent.png");
            }
            else{
                this.playerChosen = this.wooloo;//Set Char
                this.dmgSel = 0;
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/Wooloo-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/Wooloo-Transparent.png");
            }

            $("#charSel1").animate({ opacity: "1" });
            $("#startBtn").animate({ opacity: "1" });
            $("#chosenLbl").animate({ opacity: "1" });;
            this.playerHP = this.playerChosen.hp;
        },

        onStart : function() {
            $("#selectionCard").empty(); //Remove Char Selection Card
            $("#battlefieldCard").removeClass("invisible"); //Make Battlefield Card Visible
            if (this.playerChosen === this.pikachu){
                $("#enemyA").remove();
            }
            else if (this.playerChosen === this.magikarp){
                $("#enemyB").remove();
            }
            else if (this.playerChosen === this.ampharos){
                $("#enemyC").remove();
            }
            else{
                $("#enemyD").remove();
            }
            this.playerHPBar.attr("style", "width: 100%");
        },

        onenemySel : function(characterID){
            var enemyClicked = $(characterID).attr("data-letter");
            if (enemyClicked !== "F"){
                if (enemyClicked === "A"){
                    this.enemyChosen = this.pikachu;
                    $("#enemySel").attr("src","assets/Images/Characters/pikachu-Transparent.png");
                }
                else if (enemyClicked === "B"){
                    this.enemyChosen = this.magikarp;
                    $("#enemySel").attr("src","assets/Images/Characters/Magikarp-Transparent.png");
                }
                else if (enemyClicked === "C"){
                    this.enemyChosen = this.ampharos;
                    $("#enemySel").attr("src","assets/Images/Characters/Ampharos-Transparent.png");
                }
                else{
                    this.enemyChosen = this.wooloo;
                    $("#enemySel").attr("src","assets/Images/Characters/Wooloo-Transparent.png");
                }
                this.enemyHP = this.enemyChosen.hp;
                $("#enemySelection").animate({ opacity: "0" }); //Make enemySel Invisible
                $("#enemySel").animate({ opacity: "1" });       //Make Enemy Visible
                $("#charSel2").animate({ opacity: "1" });       //Make Player Visible
                $("#gameStatusCard").animate({ opacity: "1" }); //Make Game status Visible
                $("#status").text("Press Attack to fight!");    //Change Game status Text
                $("#atkBtn").attr("disabled",false);            //Enable Attack Button
                $("#enemyHPText").text(this.enemyHP);
                $("#playerHPText").text(this.playerHP);
            }
        },

        runUpdate : function() {
            var percentHP;
            
            this.enemyHP -= this.playerChosen.dmg[this.dmgSel]; //Player Attacks
            if (this.enemyHP <= 0){     //If enemy hp <= 0 (Enemy Lost)
                $("#enemyHPText").text(0);
                $("#enemySelection").animate({ opacity: "1" });     //Show Enemy Select
                $("#status").text("Choose Your next enemy!");       //Change Game status Text
                $("#gameStatusCard").animate({ opacity: "0" });     //Hide Game Status
                $("#charSel2").animate({ opacity: "0.5" });         //Hide Character
                $("#enemySel").animate({ opacity: "0" });           //Hide Enemy
                $("#atkBtn").attr("disabled",true);

                if (this.enemyChosen === this.pikachu){
                    console.log("pikachu");
                    $("#enemyAimg").attr("src","assets/Images/Characters/pikachu-Transparent-X.png").attr("data-letter","F")
                }
                else if (this.enemyChosen === this.magikarp){
                    console.log("magikarp");
                    $("#enemyBimg").attr("src","assets/Images/Characters/Magikarp-Transparent-X.png").attr("data-letter","F")
                }
                else if (this.enemyChosen === this.ampharos){
                    console.log("ampharos");
                    $("#enemyCimg").attr("src","assets/Images/Characters/Ampharos-Transparent-X.png").attr("data-letter","F")
                }
                else{
                    console.log("pikachu");
                    $("#enemyDimg").attr("src","assets/Images/Characters/Wooloo-Transparent-X.png").attr("data-letter","F")
                }
                this.progressUpdate("E",0)
            }
            else{                       //Else Enemy Proceeds With attack
                
                this.playerHP -= this.enemyChosen.dmg[this.dmgSel];
                

                if (this.playerHP <= 0){ //If Player hp <= 0 (Player Lost)
                    $("#playerHPText").text(0);
                    $("#charSel2").animate({ opacity: "0" });
                    $("#status").text("You Lost!");
                    $("#atkBtn").attr("disabled",true);
                    this.progressUpdate("P",-1)
                }
                else{
                    

                    percentHP = ((this.enemyHP / this.enemyChosen.hp) * 100); //Calculate Percentage
                    this.progressUpdate("E",percentHP);
                    $("#enemyHPText").text(this.enemyHP);
                    
                    //Calculate and update Player HP
                    percentHP = ((this.playerHP / this.playerChosen.hp) * 100); //Calculate Percentage
                    this.progressUpdate("P",percentHP);
                    $("#playerHPText").text(this.playerHP);
                }
            }
            //Increase Player Dmg
            this.playerChosen.dmg[this.dmgSel] += this.playerChosen.attackInt;
        },
        progressUpdate : function(selChar,percentHP) {
            if (selChar === "P"){ //If Player bar
                var selCharBar = $("#playerHP");
                if (percentHP === -1) //If player dead then keep 0
                    percentHP = 0;
            }
            else{ //Else Enemy Bar
                var selCharBar = $("#enemyHP");
                if (percentHP === 0) //If enemy dead then Reset bar
                    percentHP = 100;
            }
            selCharBar.attr("style", "width: " + percentHP + "%");
        },
    }
    
    
    
    //Listeners
    $(".charImg").on("click", function(){
        gameObj.onCharSel(this);
    });
    $(".enemyImg").on("click", function(){
        gameObj.onenemySel(this);
    });
    $("#startBtn").on("click", function(){
        gameObj.onStart();
    });
    $("#atkBtn").on("click", function(){
        gameObj.runUpdate();
    });
});
