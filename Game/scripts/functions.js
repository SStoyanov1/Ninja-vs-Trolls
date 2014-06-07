var keysDown = {};

window.addEventListener('keydown', function (e) {
    if ([38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
    keysDown[e.keyCode] = true;
});

window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
});

function update(mod) {

    if (37 in keysDown) {
        player.currentState = 'left';
        player.x -= player.speed * mod;
        updateAnimation(player.stateAnimations[player.currentState]);
    }
    else if (39 in keysDown) {
        player.currentState = 'right';
        player.x += player.speed * mod;
        updateAnimation(player.stateAnimations[player.currentState]);
    }

    //if (37 in keysDown) { //left
    //    mySprite.x -= mySprite.speed * mod;

    //    if (mySprite.x < 0) {
    //        mySprite.x = 0;
    //    }
    //}

    //if (39 in keysDown) { //right
    //    mySprite.x += mySprite.speed * mod;

    //    if (mySprite.x > canvas.width - mySprite.width) {
    //        mySprite.x = canvas.width - mySprite.width;
    //    }
    //}

    //if (40 in keysDown) { //down
    //    mySprite.y += mySprite.speed * mod;return;
    //}

    //if (38 in keysDown) { //up
    //    mySprite.y -= mySprite.speed * mod;
    //}
}

function render() {
    field.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(player);
    //field.fillStyle = mySprite.color;
    //field.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
}

function imageLoaded() {
    game.imagesLoaded++;
}

function Tileset(image, tileWidth, tileHeight) {
    this.image = new Image();
    game.images++;
    this.image.onload = imageLoaded;
    this.image.src = image;
    this.tileWidth = tileWidth;
    this.tileHeight = tileHeight;
}

function Animation(tileset, frames, frameDuration) {
    this.tileset = tileset;
    this.frames = frames;
    this.currentFrame = 0;
    this.frameTimer = Date.now();
    this.frameDuration = frameDuration;
}

function updateAnimation(anim) {
    if (Date.now() - anim.frameTimer > anim.frameDuration) {
        if (anim.currentFrame < anim.frames.length - 1) anim.currentFrame++;
        else anim.currentFrame = 0;
        anim.frameTimer = Date.now();
    }
}

function Sprite(stateAnimations, startingState, x, y, width, height, speed) {
    this.stateAnimations = stateAnimations;
    this.currentState = startingState;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
}

function drawSprite(sprite) {
    field.drawImage(
        sprite.stateAnimations[sprite.currentState].tileset.image,
        sprite.stateAnimations[sprite.currentState].frames[sprite.stateAnimations[sprite.currentState].currentFrame].split(',')[0] * sprite.stateAnimations[sprite.currentState].tileset.tileWidth,
        sprite.stateAnimations[sprite.currentState].frames[sprite.stateAnimations[sprite.currentState].currentFrame].split(',')[1] * sprite.stateAnimations[sprite.currentState].tileset.tileHeight,
        sprite.stateAnimations[sprite.currentState].tileset.tileWidth,
        sprite.stateAnimations[sprite.currentState].tileset.tileHeight,
        Math.round(sprite.x),
        Math.round(sprite.y),
        sprite.width,
        sprite.height
    );
}

