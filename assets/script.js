$(document).ready(function() {
    var gameObj = {

        playerChosen : null,            //Character chosen by user
        playerHP : null,                //Character HP
        playerHPBar : $("#playerHP"),   //Character HP Bar
        enemyChosen : null,              //Current Enemy
        enemyHP: null,                   //Enemy HP
        enemyHPBar : $("#enemyHP"),       //Enemy HP Bar

        //Character Objs
        pikachu : {
            hp : 120,
            attackInt : 8,
            dmg : 8,
        },
        magikarp : {
            hp : 180,
            attackInt : 8,
            dmg : 5,
        },
        ampharos : {
            hp : 150,
            attackInt : 8,
            dmg : null,
        },
        wooloo : {
            hp : 100,
            attackInt : 8,
            dmg : null,
        },


        onCharSel : function(characterID){
            charClicked = $(characterID).attr("data-letter");
            $("#charSel1").css({ opacity : 0 });
            
            if (charClicked === "A"){
                this.playerChosen = this.pikachu; //Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/pikachu-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/pikachu-Transparent.png");
            }
            else if (charClicked === "B"){
                this.playerChosen = this.magikarp;//Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/Magikarp-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/Magikarp-Transparent.png");
            }
            else if (charClicked === "C"){
                this.playerChosen = this.ampharos;//Set Char
                //Set Obj Images
                $("#charSel1").attr("src","assets/Images/Characters/Ampharos-Transparent.png");
                $("#charSel2").attr("src","assets/Images/Characters/Ampharos-Transparent.png");
            }
            else{
                this.playerChosen = this.wooloo;//Set Char
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

                $("#enemySelection").animate({ opacity: "0" }); //Make enemySel Invisible
                $("#enemySel").animate({ opacity: "1" });       //Make Enemy Visible
                $("#charSel2").animate({ opacity: "1" });       //Make Player Visible
                $("#gameStatusCard").animate({ opacity: "1" }); //Make Game status Visible
                $("#status").text("Press Attack to fight!");    //Change Game status Text

                this.enemyHP = this.enemyChosen.hp;
            }
        },

        runUpdate : function() {
            var percentHP;
            console.log("");
            console.log("-----------------Log----------------------");
            console.log("Current Player Dmg: " + this.playerChosen.dmg);
            console.log("Current Player Starting HP: " + this.playerChosen.hp);
            console.log("Current Player HP: " + this.playerHP);
            console.log("-----------------");
            console.log("Current Enemy Dmg: " + this.enemyChosen.dmg);
            console.log("Current Enemy Starting HP: " + this.enemyChosen.hp);
            console.log("Current Enemy HP: " + this.enemyHP);
            console.log("-----------------");
            
            console.log("Player attacked");
            this.enemyHP -= this.playerChosen.dmg; //Player Attacks
            console.log("Current Enemy HP: " + this.enemyHP);

            if (this.enemyHP <= 0){     //If enemy hp <= 0 (Enemy Lost)
                
                $("#enemySelection").animate({ opacity: "1" });     //Show Enemy Select
                $("#status").text("Choose Your next enemy!");       //Change Game status Text
                $("#gameStatusCard").animate({ opacity: "0" });     //Hide Game Status
                $("#charSel2").animate({ opacity: "0" });           //Hide Character
                $("#enemySel").animate({ opacity: "0" });          //Hide Enemy

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

                
                
                this.progressUpdate(this.enemyHPBar,0)
            }
            else{                       //Else Enemy Proceeds With attack
                console.log("Enemy attacked");
                this.playerHP -= this.enemyChosen.dmg;
                console.log("Current Player HP: " + this.playerHP);

                if (this.playerHP <= 0){ //If Player hp <= 0 (Player Lost)
                    console.log("Player Lost");
                    this.progressUpdate(this.playerHPBar,0)
                }
                else{
                    console.log("Regular Run");
                    //Calculate and update Enemy HP
                    percentHP = ((this.enemyHP / this.enemyChosen.hp) * 100); //Calculate Percentage
                    this.progressUpdate(this.enemyHPBar,percentHP);
                    
                    //Calculate and update Player HP
                    percentHP = ((this.playerHP / this.playerChosen.hp) * 100); //Calculate Percentage
                    this.progressUpdate(this.playerHPBar,percentHP);
                }
            }
            //Increase Player Dmg
            this.playerChosen.dmg += this.playerChosen.attackInt;
        },
        progressUpdate : function(selCharBar,percentHP) {
            if (percentHP === 0){ //If dead then Reset bar
                percentHP = 100
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
