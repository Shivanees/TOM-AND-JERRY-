        var canvas,bg;
        var together;
        var tom,tomimg1,tomimg2,tomimg3,tomimg4;
        var jerry,jerryimg1,jerryimg2,jerryimg3,jerryimg4;

        function preload() {
            //load the images here
            bg=loadImage("images/garden.png");
            tomimg1=loadAnimation("images/tomOne.png");
            tomimg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
            tomimg3=loadAnimation("images/tomfour.png");
            jerryimg1=loadAnimation("images/jerryOne.png");
            jerryimg2=loadAnimation("images/jerryTwo.png");
            jerryimg3=loadAnimation("images/jerryThree.png");
            jerryimg4=loadAnimation("images/jerryFour.png");
        }

        function setup(){

        canvas = createCanvas(1000,800);

            //create tom and jerry sprites here
            tom=createSprite(870,600);
            tom.addAnimation("tomSleeping",tomimg1);
            tom.scale=0.2;

            jerry=createSprite(200,600);
            jerry.addAnimation("jerryStanding",jerryimg1);
            jerry.scale=0.15;
        }

        function draw() {
            
            background(bg);

            //Write condition here to evalute if tom and jerry collide
            if(tom.x - jerry.x<(tom.width - jerry.width)/2){
                tom.velocityX=0
                tom.addAnimation("tomLastImage",tomimg3);
                tom.x=300;
                tom.scale=0.2;
                tom.changeAnimation("tomLastImage");

                jerry.addAnimation("jerryLastImage",jerryimg3);
                jerry.scale=0.15;
                jerry.changeAnimation("jerryLastImage");

            }
            keyPressed();
            drawSprites();
        }
        function keyPressed(){
        //For moving and changing animation write code here
        if(keyCode === LEFT_ARROW){
            tom.velocityX=-5;
            tom.addAnimation("tomRunning",tomimg2);
            tom.changeAnimation("tomRunning");

            jerry.addAnimation("jerryTeasing",jerryimg3);
            jerry.frameDelay=25;
            jerry.changeAnimation("jerryTeasing");}

            if(tom.isTouching(jerry)){
            tom.addAnimation("tomLastImage",tomimg3)
            tom.changeAnimation("tomLastImage");
            
            jerry.addAnimation("jerryLastImage",jerryimg4)
            jerry.changeAnimation("jerryLastImage")
            tom.velocityX=0;
        }
        }
