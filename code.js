var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["823faff5-1e16-4ceb-84cd-39e4bda760c7","5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8","251332b3-7aeb-40af-ac0f-1cceb3d1db5b","a8f36482-803d-4474-94a6-b14b425df10b","68477024-3d74-4132-9018-43e3b2455414","65528f54-5eee-459a-bbf1-72442de913ce","413763f0-3539-4abe-b780-cbe113c87c37","33e76b5a-17ab-4025-9dd3-b8254d140542","95884232-b556-458d-b10b-c6bf48173842","76944839-ed92-460d-bef5-84beaa809302","8a26e16c-348e-4ea8-ab54-625443db6c0c","86ecda0c-5714-458f-a34b-2bdf41c07f9e","9bc392a4-be48-4177-960c-2272266689c8"],"propsByKey":{"823faff5-1e16-4ceb-84cd-39e4bda760c7":{"name":"red","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"TWiZ.SAUTIyOC83YAfBxyn3Sc50JkXgA","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/823faff5-1e16-4ceb-84cd-39e4bda760c7.png"},"5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8":{"name":"green","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"7nYdAAjMXJodAb9gll_s9Kp2lCyBCFFC","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/5ce6a5fd-ee7c-457a-95c8-eeff11cb6dc8.png"},"251332b3-7aeb-40af-ac0f-1cceb3d1db5b":{"name":"blue","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"0LOg45duBuwMjqn6ogKTiYwsz3f1l7OZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/251332b3-7aeb-40af-ac0f-1cceb3d1db5b.png"},"a8f36482-803d-4474-94a6-b14b425df10b":{"name":"yellow","sourceUrl":null,"frameSize":{"x":29,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"aHrO9y7t01akwoPACcTU1Kyju4KZQpio","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":74},"rootRelativePath":"assets/a8f36482-803d-4474-94a6-b14b425df10b.png"},"68477024-3d74-4132-9018-43e3b2455414":{"name":"bow","sourceUrl":null,"frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jpd6rq3lhwRUoJsRID7aWXUWBrvFs0k0","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/68477024-3d74-4132-9018-43e3b2455414.png"},"65528f54-5eee-459a-bbf1-72442de913ce":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qsn8Ge4D.d1mkoTRq2qUV3lrSTiKn_IH/category_backgrounds/background_space.png"},"413763f0-3539-4abe-b780-cbe113c87c37":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"33e76b5a-17ab-4025-9dd3-b8254d140542":{"name":"textGetReady_1","sourceUrl":"assets/api/v1/animation-library/gamelab/eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW/category_gameplay/textGetReady.png","frameSize":{"x":400,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eDB8BrVXfJf5ToV5O4yH1cgRUWocOERW/category_gameplay/textGetReady.png"},"95884232-b556-458d-b10b-c6bf48173842":{"name":"arro","sourceUrl":"assets/api/v1/animation-library/gamelab/QLplTpu00ayI7h28O_xxwQhs1KTbX_ay/category_gameplay/pieceYellow_multi10.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"QLplTpu00ayI7h28O_xxwQhs1KTbX_ay","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QLplTpu00ayI7h28O_xxwQhs1KTbX_ay/category_gameplay/pieceYellow_multi10.png"},"76944839-ed92-460d-bef5-84beaa809302":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"kALchBia7gs8_UxR9EdavJHu6ExTQpxG","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/76944839-ed92-460d-bef5-84beaa809302.png"},"8a26e16c-348e-4ea8-ab54-625443db6c0c":{"name":"enemy2","sourceUrl":null,"frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"jKOVP14FkVNdEwkLdEqhvfZAVBqwtHu5","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/8a26e16c-348e-4ea8-ab54-625443db6c0c.png"},"86ecda0c-5714-458f-a34b-2bdf41c07f9e":{"name":"enemy","sourceUrl":null,"frameSize":{"x":104,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"sTCBgKbfG8QAvaOAxl9aveA6qmeGVIm0","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":84},"rootRelativePath":"assets/86ecda0c-5714-458f-a34b-2bdf41c07f9e.png"},"9bc392a4-be48-4177-960c-2272266689c8":{"name":"enemy3","sourceUrl":null,"frameSize":{"x":103,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"xuX4G9baP1p.eXToCefXoLT7PULrj3p8","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":103,"y":84},"rootRelativePath":"assets/9bc392a4-be48-4177-960c-2272266689c8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;  
  

  var bg = createSprite(0,0,400,400);
  var bow = createSprite(350,200,20,20);
  //var createArrow = createSprite(371,200,20,20);
  bow.setAnimation("bow");
  bow.scale = 0.5;

    bg.setAnimation("space");
    bg.scale = 2;
    bg.velocityX = -2;
    bg.x = bg.width/2;

var enemy1Group = createGroup();
var arrowGroup = createGroup();
var enemyGroup = createGroup();
var enemy2Group = createGroup();
var enemy3Group = createGroup();
var score =0;
function draw() {
    
  if(bg.x < 0){
  bg.x = bg.width/2;
  }
  
  bow.y = World.mouseY;  
      
    if(gameState === PLAY){
        
if(keyDown("space")){
arrow();
enemy3();
enemy2();
enemy1();
enemy();
}
  
  
if (gameState===END){
  enemy1Group.velocityX = 0;
  enemyGroup.velocityX = 0;
  enemy2Group.velocityX = 0;
  enemy3Group.velocityX = 0;
}


if(enemyGroup.isTouching(arrowGroup)){
          enemyGroup.destroyEach();
          arrowGroup.destroyEach();
          score=score+1;
        }
        
        
        if(enemy1Group.isTouching(arrowGroup)){
          enemy1Group.destroyEach();
          arrowGroup.destroyEach();
            score=score+1;

        }
        
        
        if(enemy2Group.isTouching(arrowGroup)){
          enemy2Group.destroyEach();
          arrowGroup.destroyEach();
            score=score+1;

        }
        
        
        if(enemy3Group.isTouching(arrowGroup)){
          enemy3Group.destroyEach();
          arrowGroup.destroyEach();
            score=score+1;

        }
        createEdgeSprites();
        
    if(enemyGroup.isTouching(rightEdge)){
    gameState = END;
    }
    
    if(enemy1Group.isTouching(rightEdge)){
    gameState = END;
    }
    
    if(enemy2Group.isTouching(rightEdge)){
    gameState = END;
    }
    
    if(enemy3Group.isTouching(rightEdge)){
    gameState = END;
    }



           
        drawSprites();
    }
    
    //var me = Math.round(World.frameCount/ 5);
  fill("white");
  textSize("18");
  text("SCORE-:  "+score,230,20);
  if(gameState === END){
  textSize(20);
  text("GAME OVER",160,200);
}
} 

        function arrow (){
          if(World.frameCount % 16 === 0){
        var arrow = createSprite(350,200,20,20);
        arrow.setAnimation("arro");
        arrow.scale=0.3;
        arrow.velocityX = -3;
        arrow.y=bow.y;
        playSound("assets/category_slide/whoosh_4.mp3", false);
        arrowGroup.add(arrow);
        }
}


    function enemy3 (){
    if(World.frameCount % 20 === 0){
    var enemy3 = createSprite(0, 0, 20, 20);
    enemy3.setAnimation("enemy3");
    enemy3.y = randomNumber(60,370);
    enemy3.scale = 0.3;
    enemy3.velocityX = 4;
    var rand = randomNumber(60,370);
    enemy3.lifetime = 105;
    enemy3Group.add(enemy3);
    }
    }


    function enemy2 (){
    if(World.frameCount % 89 === 0){
      enemy2 = createSprite(0, 0, 20, 20);
      enemy2.setAnimation("enemy2");
      enemy2.y = randomNumber(60,370);
      enemy2.scale = 0.3;
      enemy2.velocityX = 4;
      var rand = randomNumber(60,370);
      enemy2.lifetime = 105;
      enemy2Group.add(enemy2);
    }
      
    }


function enemy1 (){
    if(World.frameCount % 47 === 0){
      enemy1 = createSprite(0, 0, 20, 20);
      enemy1.setAnimation("enemy1");
      enemy1.y = randomNumber(60,370);
      enemy1.scale = 0.3;
      enemy1.velocityX = 4;
      //var rand = randomNumber(60,370);
      enemy1.lifetime = 105;
      enemy1Group.add(enemy1);
    }
}



    
    function enemy (){
if(World.frameCount % 120 === 0){
      var enemy = createSprite(0, 0, 20, 20);
      enemy.setAnimation("enemy");
      enemy.y = randomNumber(60,370);
      enemy.scale = 0.3;
      enemy.velocityX = 4;
      var rand = randomNumber(60,370);
      enemy.lifetime = 150;
      enemyGroup.add(enemy);
    }
    }

 




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
